from sqlalchemy import create_engine, Column, Integer, String, DateTime, Float, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from uuid import uuid4
import os

engine = create_engine(os.environ.get("DATABASE_URL", "postgresql+psycopg2://user:password@27.0.0.1:5432/dbname"))

SessionLocal = sessionmaker(autoflush=False, bind=engine)

Base = declarative_base()

class Example(Base):
    __tablename__ = "example"
    id = Column(String, primary_key=True, index=True, default=lambda: str(uuid4()))
    title = Column(String)
    created_at = Column(DateTime, server_default='now()')
    updated_at = Column(DateTime, server_default='now()', server_onupdate='now()')

    
try:
    Base.metadata.create_all(bind=engine)
except:pass
# Path: api/main.py