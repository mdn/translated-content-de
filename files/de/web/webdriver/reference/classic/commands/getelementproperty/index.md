---
title: Eigenschaft eines Elements abrufen
slug: Web/WebDriver/Reference/Classic/Commands/GetElementProperty
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der _Eigenschaft eines Elements abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Eigenschaft des referenzierten [Web-Elements](/de/docs/Web/WebDriver/Reference/WebElement) zurück. Gegeben sei `<input value=foo>`, bei dem der Benutzer den Wert auf `bar` ändert, so wird die zurückgegebene Eigenschaft `bar` sein, anstelle des ursprünglichen Wertes `foo`. Dies entspricht dem Zugriff auf die Eigenschaft des Elements.

## Syntax

| Methode | URI-Vorlage                                                  |
| ------- | ------------------------------------------------------------ |
| `GET`   | `/session/{session id}/element/{element id}/property/{name}` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.
- `element id`
  - : Bezeichner des [Web-Elements](/de/docs/Web/WebDriver/Reference/WebElement), dessen Tag-Name abgerufen werden soll.
- `name`
  - : Bezeichner der Eigenschaft des [Web-Elements](/de/docs/Web/WebDriver/Reference/WebElement), die abgerufen werden soll.

### Fehler

- [Session not created](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
  - : Die Sitzung existiert nicht.
- [No such window](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- [Unexpected alert open](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Ein Benutzer-Prompt, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Befehlsausführung, bis es behandelt wird.

## Beispiele

Python:

```python
import urllib

from selenium import webdriver

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox()
session.get(inline("<input value=foo>"))
textbox = driver.find_element_by_tag_name("input")
textbox.send_keys("bar")

print(text_box.get_attribute("value"))
print(text_box.get_property("value"))
```

Ausgabe:

```plain
foo
bar
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eigenschaft eines Elements abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetElementAttribute) Befehl
- _[Was ist der Unterschied zwischen Eigenschaften und Attributen?](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html)_ auf Stack Overflow
