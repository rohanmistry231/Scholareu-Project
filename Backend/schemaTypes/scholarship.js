// schemas/scholarship.js

export default {
  name: 'scholarship',
  type: 'document',
  title: 'Scholarship',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the scholarship.',
      validation: Rule => Rule.required().min(10).max(100),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A brief description of the scholarship.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'criteria',
      type: 'text',
      title: 'Criteria',
      description: 'The eligibility criteria for the scholarship.',
    },
    {
      name: 'funding',
      type: 'string',
      title: 'Funding',
      description: 'Type of funding (e.g., Partial, Full).',
      options: {
        list: [
          { title: 'Partial', value: 'partial' },
          { title: 'Full', value: 'full' },
        ],
      },
    },
    {
      name: 'university',
      type: 'string',
      title: 'University',
      description: 'The university offering the scholarship.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'level',
      type: 'string',
      title: 'Level',
      description: 'The level of study (e.g., Undergraduate, Postgraduate).',
      options: {
        list: [
          { title: 'Undergraduate', value: 'undergraduate' },
          { title: 'Postgraduate', value: 'postgraduate' },
          { title: 'Fellowship', value: 'Fellowship' },
        ],
      },
    },
    {
      name: 'subjects',
      type: 'array',
      title: 'Subjects',
      description: 'The subjects covered by the scholarship.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'students',
      type: 'string',
      title: 'Eligible Students',
      description: 'Eligible students (e.g., Domestic, International).',
      options: {
        list: [
          { title: 'Domestic', value: 'domestic' },
          { title: 'International', value: 'international' },
        ],
      },
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country',
      description: 'The country where the scholarship is offered.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'deadline',
      type: 'date',
      title: 'Deadline',
      description: 'The application deadline for the scholarship.',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Application Link',
      description: 'The link to apply for the scholarship.',
      validation: Rule => Rule.required().uri(),
    },
  ],
};
