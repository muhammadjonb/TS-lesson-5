export type TeacherType = {
  id: string;
  name: string;
  username: string;
  email: string;
  level: string;
  index: number;
};

export type TeacherStoreType = {
  loading: boolean;
  teachers: TeacherType[];
  error: any;
  getTeachers: () => void;
};

export type Item = {
  id: string;
  name: string;
  username: string;
  email: string;
  level: string;
  index: number;
};
