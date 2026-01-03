// Supabase Dark Theme for ACE Editor
// Colors extracted from Supabase's code editor styling
ace.define("ace/theme/supabase_dark",["require","exports","module","ace/lib/dom"],function(e,t,n){
  t.isDark=!0;
  t.cssClass="ace-supabase-dark";
  t.cssText="\
.ace-supabase-dark .ace_gutter {\
  background: hsl(0, 0%, 9%);\
  color: hsl(0, 0%, 30.2%);\
  border-right: 1px solid hsl(0, 0%, 18%)\
}\
.ace-supabase-dark .ace_print-margin {\
  width: 1px;\
  background: hsl(0, 0%, 18%)\
}\
.ace-supabase-dark {\
  background-color: hsl(0, 0%, 9%);\
  color: hsl(0, 0%, 98%)\
}\
.ace-supabase-dark .ace_cursor {\
  color: hsl(153.1, 60.2%, 52.7%)\
}\
.ace-supabase-dark .ace_marker-layer .ace_selection {\
  background: hsla(153.1, 60.2%, 52.7%, 0.15)\
}\
.ace-supabase-dark.ace_multiselect .ace_selection.ace_start {\
  box-shadow: 0 0 3px 0px hsl(0, 0%, 9%)\
}\
.ace-supabase-dark .ace_marker-layer .ace_step {\
  background: hsl(38.9, 100%, 42.9%)\
}\
.ace-supabase-dark .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid hsl(0, 0%, 24.3%)\
}\
.ace-supabase-dark .ace_marker-layer .ace_active-line {\
  background: hsl(0, 0%, 12.2%)\
}\
.ace-supabase-dark .ace_gutter-active-line {\
  background-color: hsl(0, 0%, 12.2%)\
}\
.ace-supabase-dark .ace_marker-layer .ace_selected-word {\
  border: 1px solid hsla(153.1, 60.2%, 52.7%, 0.3)\
}\
.ace-supabase-dark .ace_invisible {\
  color: hsl(0, 0%, 24.3%)\
}\
.ace-supabase-dark .ace_keyword,\
.ace-supabase-dark .ace_meta,\
.ace-supabase-dark .ace_storage,\
.ace-supabase-dark .ace_storage.ace_type,\
.ace-supabase-dark .ace_support.ace_type {\
  color: hsl(276.1, 67.7%, 74.5%)\
}\
.ace-supabase-dark .ace_keyword.ace_operator {\
  color: hsl(170.8, 43.1%, 61.4%)\
}\
.ace-supabase-dark .ace_constant.ace_character,\
.ace-supabase-dark .ace_constant.ace_language,\
.ace-supabase-dark .ace_constant.ace_numeric,\
.ace-supabase-dark .ace_keyword.ace_other.ace_unit,\
.ace-supabase-dark .ace_support.ace_constant,\
.ace-supabase-dark .ace_variable.ace_parameter {\
  color: hsl(33.2, 90.3%, 75.7%)\
}\
.ace-supabase-dark .ace_constant.ace_other {\
  color: hsl(0, 0%, 53.7%)\
}\
.ace-supabase-dark .ace_invalid {\
  color: hsl(0, 0%, 100%);\
  background-color: hsl(10.2, 77.9%, 53.9%)\
}\
.ace-supabase-dark .ace_invalid.ace_deprecated {\
  color: hsl(0, 0%, 100%);\
  background-color: hsl(276.1, 67.7%, 74.5%)\
}\
.ace-supabase-dark .ace_fold {\
  background-color: hsl(217.2, 91.2%, 59.8%);\
  border-color: hsl(0, 0%, 98%)\
}\
.ace-supabase-dark .ace_entity.ace_name.ace_function,\
.ace-supabase-dark .ace_support.ace_function,\
.ace-supabase-dark .ace_variable {\
  color: hsl(217.2, 91.2%, 70%)\
}\
.ace-supabase-dark .ace_support.ace_class,\
.ace-supabase-dark .ace_support.ace_type {\
  color: hsl(38.9, 100%, 60%)\
}\
.ace-supabase-dark .ace_heading,\
.ace-supabase-dark .ace_markup.ace_heading,\
.ace-supabase-dark .ace_string {\
  color: hsl(153.1, 60.2%, 52.7%)\
}\
.ace-supabase-dark .ace_entity.ace_name.ace_tag,\
.ace-supabase-dark .ace_entity.ace_other.ace_attribute-name,\
.ace-supabase-dark .ace_meta.ace_tag,\
.ace-supabase-dark .ace_string.ace_regexp,\
.ace-supabase-dark .ace_variable {\
  color: hsl(13.8, 89.7%, 69.6%)\
}\
.ace-supabase-dark .ace_comment {\
  color: hsl(0, 0%, 43.9%);\
  font-style: italic\
}\
.ace-supabase-dark .ace_indent-guide {\
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\
}\
.ace-supabase-dark .ace_indent-guide-active {\
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQI12NgYGBgYOjv7/8PAATgAm+jRdYAAAAASUVORK5CYII=) right repeat-y\
}";
  var r=e("../lib/dom");
  r.importCssString(t.cssText,t.cssClass);
});
