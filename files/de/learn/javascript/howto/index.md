---
title: Lösen Sie häufige Probleme in Ihrem JavaScript-Code
slug: Learn/JavaScript/Howto
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{LearnSidebar}}

Die folgenden Links bieten Lösungen für häufige Probleme, die beim Schreiben von JavaScript auftreten können.

## Häufige Anfängerfehler

### Korrekte Schreibweise und Groß-/Kleinschreibung

Wenn Ihr Code nicht funktioniert und/oder der Browser moniert, dass etwas nicht definiert ist, überprüfen Sie, ob Sie alle Variablennamen, Funktionsnamen usw. korrekt geschrieben haben.

Einige häufige eingebaute Browserfunktionen, die Probleme verursachen, sind:

| Korrekt                    | Falsch                    |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementByTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### Position des Semikolons

Stellen Sie sicher, dass Sie keine Semikolons falsch platzieren. Zum Beispiel:

| Korrekt                     | Falsch                      |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### Funktionen

Es gibt eine Reihe von Aspekten, die bei Funktionen falsch laufen können.

Einer der häufigsten Fehler ist es, die Funktion zu deklarieren, sie aber nirgendwo aufzurufen. Zum Beispiel:

```js
function myFunction() {
  alert("This is my function.");
}
```

Dieser Code wird nichts tun, es sei denn, Sie rufen ihn mit der folgenden Anweisung auf:

```js
myFunction();
```

#### Funktionsbereich

Denken Sie daran, dass [Funktionen ihren eigenen Bereich haben](/de/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts) — Sie können nicht auf einen inneren Wert einer Funktion von außerhalb zugreifen, es sei denn, Sie haben die Variable global deklariert (d.h. nicht innerhalb irgendeiner Funktion) oder [den Wert zurückgegeben](/de/docs/Learn/JavaScript/Building_blocks/Return_values) von der Funktion.

#### Ausführen von Code nach einer `return`-Anweisung

Denken Sie auch daran, dass wenn Sie von einer Funktion zurückkehren, der JavaScript-Interpreter die Funktion verlässt — kein Code nach der `return`-Anweisung wird ausgeführt.

Tatsächlich geben einige Browser (wie Firefox) eine Fehlermeldung in der Entwicklerkonsole aus, wenn Sie Code nach einer `return`-Anweisung haben. Firefox zeigt Ihnen "unreachable code after return statement" an.

### Objekt-Notation versus normale Zuweisung

Wenn Sie in JavaScript etwas normal zuweisen, verwenden Sie ein einzelnes Gleichheitszeichen, z.B.:

```js
const myNumber = 0;
```

Bei [Objekten](/de/docs/Learn/JavaScript/Objects) müssen Sie jedoch darauf achten, die korrekte Syntax zu verwenden. Das Objekt muss von geschweiften Klammern umgeben sein, Mitgliedsnamen müssen durch Doppelpunkte von ihren Werten getrennt werden, und Mitglieder müssen durch Kommas getrennt sein. Zum Beispiel:

```js
const myObject = {
  name: "Chris",
  age: 38,
};
```

## Grundlegende Definitionen

- [Was ist JavaScript?](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#a_high-level_definition)
- [Was ist eine Variable?](/de/docs/Learn/JavaScript/First_steps/Variables#what_is_a_variable)
- [Was sind Strings?](/de/docs/Learn/JavaScript/First_steps/Strings)
- [Was ist ein Array?](/de/docs/Learn/JavaScript/First_steps/Arrays#what_is_an_array)
- [Was ist eine Schleife?](/de/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [Was ist eine Funktion?](/de/docs/Learn/JavaScript/Building_blocks/Functions)
- [Was ist ein Ereignis?](/de/docs/Learn/JavaScript/Building_blocks/Events)
- [Was ist ein Objekt?](/de/docs/Learn/JavaScript/Objects/Basics#object_basics)
- [Was ist JSON?](/de/docs/Learn/JavaScript/Objects/JSON#no_really_what_is_json)
- [Was ist ein Web API?](/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#what_are_apis)
- [Was ist das DOM?](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model)

## Grundlegende Anwendungsfälle

### Allgemein

- [Wie fügen Sie Ihrer Seite JavaScript hinzu?](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#how_do_you_add_javascript_to_your_page)
- [Wie fügen Sie JavaScript-Code Kommentare hinzu?](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#comments)

### Variablen

- [Wie deklarieren Sie eine Variable?](/de/docs/Learn/JavaScript/First_steps/Variables#declaring_a_variable)
- [Wie initialisieren Sie eine Variable mit einem Wert?](/de/docs/Learn/JavaScript/First_steps/Variables#initializing_a_variable)
- [Wie aktualisieren Sie den Wert einer Variable?](/de/docs/Learn/JavaScript/First_steps/Variables#updating_a_variable) (siehe auch [Zuweisungsoperatoren](/de/docs/Learn/JavaScript/First_steps/Math#assignment_operators))
- [Welche Datentypen können Werte in JavaScript haben?](/de/docs/Learn/JavaScript/First_steps/Variables#variable_types)
- [Was bedeutet 'schwach typisiert'?](/de/docs/Learn/JavaScript/First_steps/Variables#dynamic_typing)

### Mathematik

- [Welche Arten von Zahlen müssen Sie in der Webentwicklung behandeln?](/de/docs/Learn/JavaScript/First_steps/Math#types_of_numbers)
- [Wie führen Sie grundlegende Mathematik in JavaScript aus?](/de/docs/Learn/JavaScript/First_steps/Math#arithmetic_operators)
- [Was ist Operatoren-Priorität, und wie wird sie in JavaScript gehandhabt?](/de/docs/Learn/JavaScript/First_steps/Math#operator_precedence)
- [Wie erhöhen und verringern Sie Werte in JavaScript?](/de/docs/Learn/JavaScript/First_steps/Math#increment_and_decrement_operators)
- [Wie vergleichen Sie Werte in JavaScript?](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators) (z.B. um zu sehen, welche größer ist, oder ob ein Wert gleich einem anderen ist).

### Strings

- [Wie erstellen Sie einen String in JavaScript?](/de/docs/Learn/JavaScript/First_steps/Strings#creating_a_string)
- [Müssen Sie einfache Anführungszeichen oder doppelte Anführungszeichen verwenden?](/de/docs/Learn/JavaScript/First_steps/Strings#single_quotes_vs._double_quotes)
- [Wie werden Zeichen in Strings maskiert?](/de/docs/Learn/JavaScript/First_steps/Strings#escaping_characters_in_a_string)
- [Wie fügen Sie Strings zusammen?](/de/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings)
- [Können Sie Strings und Zahlen zusammenfügen?](/de/docs/Learn/JavaScript/First_steps/Strings#numbers_vs._strings)
- [Wie bestimmen Sie die Länge eines Strings?](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods#finding_the_length_of_a_string)
- [Wie finden Sie heraus, welches Zeichen an einer bestimmten Position in einem String steht?](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods#retrieving_a_specific_string_character)
- [Wie finden und extrahieren Sie eine bestimmte Teilzeichenfolge aus einem String?](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods#extracting_a_substring_from_a_string)
- [Wie ändern Sie die Groß-/Kleinschreibung eines Strings?](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods#changing_case)
- [Wie ersetzen Sie eine bestimmte Teilzeichenfolge durch eine andere?](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods#updating_parts_of_a_string)

### Arrays

- [Wie erstellen Sie ein Array?](/de/docs/Learn/JavaScript/First_steps/Arrays#creating_arrays)
- [Wie greifen Sie auf die Elemente in einem Array zu und ändern sie?](/de/docs/Learn/JavaScript/First_steps/Arrays#accessing_and_modifying_array_items) (dazu gehören auch mehrdimensionale Arrays)
- [Wie bestimmen Sie die Länge eines Arrays?](/de/docs/Learn/JavaScript/First_steps/Arrays#finding_the_length_of_an_array)
- [Wie fügen Sie Elemente zu einem Array hinzu?](/de/docs/Learn/JavaScript/First_steps/Arrays#adding_items)
- [Wie entfernen Sie Elemente aus einem Array?](/de/docs/Learn/JavaScript/First_steps/Arrays#removing_items)
- [Wie teilen Sie einen String in Array-Elemente oder verbinden Array-Elemente in einen String?](/de/docs/Learn/JavaScript/First_steps/Arrays#converting_between_strings_and_arrays)

### Debugging JavaScript

- [Was sind die grundlegenden Arten von Fehlern?](/de/docs/Learn/JavaScript/First_steps/What_went_wrong#types_of_error)
- [Was sind Browser-Entwicklertools, und wie greifen Sie darauf zu?](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)
- [Wie protokollieren Sie einen Wert in der JavaScript-Konsole?](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#the_console_api)
- [Wie verwenden Sie Breakpoints und andere JavaScript-Debugging-Funktionen?](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#using_the_javascript_debugger)

Für weitere Informationen zur JavaScript-Fehlerbehebung siehe [Umgang mit häufigen JavaScript-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript). Siehe auch [Andere häufige Fehler](/de/docs/Learn/JavaScript/First_steps/What_went_wrong#other_common_errors) für eine Beschreibung häufiger Fehler.

### Entscheidungen im Code treffen

- [Wie führen Sie unterschiedlich Codeblöcke aus, abhängig vom Wert einer Variablen oder einer anderen Bedingung?](/de/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Wie verwenden Sie `if ...else`-Anweisungen?](/de/docs/Learn/JavaScript/Building_blocks/conditionals#if...else_statements)
- [Wie verschachteln Sie einen Entscheidungsblock in einen anderen?](/de/docs/Learn/JavaScript/Building_blocks/conditionals#nesting_if...else)
- [Wie verwenden Sie `AND`, `OR` und `NOT` Operatoren in JavaScript?](/de/docs/Learn/JavaScript/Building_blocks/conditionals#logical_operators_and_or_and_not)
- [Wie gehen Sie bequem mit einer großen Anzahl von Auswahlmöglichkeiten für eine Bedingung um?](/de/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)
- [Wie verwenden Sie einen ternären Operator, um schnell zwischen zwei Optionen basierend auf einem wahren oder falschen Test zu wählen?](/de/docs/Learn/JavaScript/Building_blocks/conditionals#ternary_operator)

### Schleifen/Iteration

- [Wie führen Sie denselben Codeabschnitt immer wieder aus?](/de/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [Wie beenden Sie eine Schleife vorzeitig, wenn eine bestimmte Bedingung erfüllt ist?](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break)
- [Wie überspringen Sie zur nächsten Iteration einer Schleife, wenn eine bestimmte Bedingung erfüllt ist?](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#skipping_iterations_with_continue)
- [Wie verwenden Sie `while` und `do...while` Schleifen?](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while)

## Fortgeschrittene Anwendungsfälle

### Funktionen

- [Wie finden Sie Funktionen im Browser?](/de/docs/Learn/JavaScript/Building_blocks/Functions#built-in_browser_functions)
- [Was ist der Unterschied zwischen einer Funktion und einer Methode?](/de/docs/Learn/JavaScript/Building_blocks/Functions#functions_versus_methods)
- [Wie erstellen Sie Ihre eigenen Funktionen?](/de/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [Wie führen Sie eine Funktion aus (rufen sie auf, oder `invoke` sie)?](/de/docs/Learn/JavaScript/Building_blocks/Functions#invoking_functions)
- [Was ist eine anonyme Funktion?](/de/docs/Learn/JavaScript/Building_blocks/Functions#anonymous_functions)
- [Wie spezifizieren Sie Parameter (oder Argumente), wenn Sie eine Funktion aufrufen?](/de/docs/Learn/JavaScript/Building_blocks/Functions#function_parameters)
- [Was ist Funktionsbereich?](/de/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts)
- [Was sind Rückgabewerte, und wie verwenden Sie sie?](/de/docs/Learn/JavaScript/Building_blocks/Return_values)

### Objekte

- [Wie erstellen Sie ein Objekt?](/de/docs/Learn/JavaScript/Objects/Basics#object_basics)
- [Was ist Punktnotation?](/de/docs/Learn/JavaScript/Objects/Basics#dot_notation)
- [Was ist Klammernotation?](/de/docs/Learn/JavaScript/Objects/Basics#bracket_notation)
- [Wie holen Sie ab und setzen die Methoden und Eigenschaften eines Objekts?](/de/docs/Learn/JavaScript/Objects/Basics#setting_object_members)
- [Was ist `this`, im Kontext eines Objekts?](/de/docs/Learn/JavaScript/Objects/Basics#what_is_this)
- [Was ist objektorientierte Programmierung?](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#object-oriented_programming_from_10000_meters)
- [Was sind Konstruktoren und Instanzen, und wie erstellen Sie diese?](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#constructors_and_object_instances)
- [Welche verschiedenen Möglichkeiten gibt es, Objekte in JavaScript zu erstellen?](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#other_ways_to_create_object_instances)

### JSON

- [Wie strukturieren Sie JSON-Daten und lesen sie von JavaScript aus?](/de/docs/Learn/JavaScript/Objects/JSON#json_structure)
- [Wie können Sie eine JSON-Datei in eine Seite laden?](/de/docs/Learn/JavaScript/Objects/JSON#loading_our_json)
- [Wie konvertieren Sie ein JSON-Objekt in einen Textstring und wieder zurück?](/de/docs/Learn/JavaScript/Objects/JSON#converting_between_objects_and_text)

### Ereignisse

- [Was sind Ereignishandler und wie verwenden Sie diese?](/de/docs/Learn/JavaScript/Building_blocks/Events#event_handler_properties)
- [Was sind Inline-Ereignishandler?](/de/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_%e2%80%94_don%27t_use_these)
- [Was macht die Funktion `addEventListener()`, und wie verwenden Sie sie?](/de/docs/Learn/JavaScript/Building_blocks/Events#using_addeventlistener)
- [Welchen Mechanismus sollte ich verwenden, um Ereigniscode zu meinen Webseiten hinzuzufügen?](/de/docs/Learn/JavaScript/Building_blocks/Events#what_mechanism_should_i_use)
- [Was sind Ereignisobjekte, und wie verwenden Sie diese?](/de/docs/Learn/JavaScript/Building_blocks/Events#event_objects)
- [Wie verhindern Sie das Standardverhalten eines Ereignisses?](/de/docs/Learn/JavaScript/Building_blocks/Events#preventing_default_behavior)
- [Wie werden Ereignisse auf verschachtelten Elementen ausgelöst? (Ereignisausbreitung, auch verwandt — Ereignisblasen und -erfassung)](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
- [Was ist Ereignisdelegation, und wie funktioniert sie?](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling#event_delegation)

### Objektorientiertes JavaScript

- [Was sind Objektprototypen?](/de/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Was ist die Konstruktoreigenschaft, und wie können Sie diese verwenden?](/de/docs/Learn/JavaScript/Objects/Object_prototypes#the_constructor_property)
- [Wie fügen Sie Methoden zum Konstruktor hinzu?](/de/docs/Learn/JavaScript/Objects/Object_prototypes#modifying_prototypes)
- [Wie erstellen Sie einen neuen Konstruktor, der seine Mitglieder von einem Elternkonstruktor erbt?](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
- [Wann sollten Sie Vererbung in JavaScript verwenden?](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#object_member_summary)

### Web APIs

- [Wie manipulieren Sie das DOM (z.B. Hinzufügen oder Entfernen von Elementen) mit JavaScript?](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation)
