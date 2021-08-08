-- Create the table
create table unique_words_counter (
  unique_word text primary key,
  unique_word_count integer default 1
);

-- insert word abc. creates new row
insert into unique_words_counter (unique_word) values ('abc')
  on conflict (unique_word)
    do update set unique_word_count = unique_words_counter.unique_word_count + 1;

-- insert word abc. updates existing row
insert into unique_words_counter (unique_word) values ('abc')
  on conflict (unique_word)
    do update set unique_word_count = unique_words_counter.unique_word_count + 1;

-- insert word def. creates new row
insert into unique_words_counter (unique_word) values ('def')
  on conflict (unique_word)
    do update set unique_word_count = unique_words_counter.unique_word_count + 1;