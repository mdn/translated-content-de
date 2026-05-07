---
title: Elementeigenschaft abrufen
slug: Web/WebDriver/Reference/Classic/Commands/GetElementProperty
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der _Elementeigenschaft abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Eigenschaft des referenzierten [Webelements](/de/docs/Web/WebDriver/Reference/WebElement) zurück. Gegeben `<input value=foo>`, bei dem der Benutzer den Wert in `bar` ändert, wird die zurückgegebene Eigenschaft `bar` statt des ursprünglichen Wertes `foo` sein. Dies entspricht dem Zugriff auf die Eigenschaft am Element.

## Syntax

| Methode | URI-Template                                                 |
| ------- | ------------------------------------------------------------ |
| `GET`   | `/session/{session id}/element/{element id}/property/{name}` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `element id`
  - : Kennung des [Webelements](/de/docs/Web/WebDriver/Reference/WebElement), dessen Tag-Name abgerufen werden soll.
- `name`
  - : Kennung der Eigenschaft des [Webelements](/de/docs/Web/WebDriver/Reference/WebElement), die abgerufen werden soll.

### Fehler

- [`session not created`](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
  - : Sitzung existiert nicht.
- [`no such window`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Das [`Fenster`](/de/docs/Web/API/Window) Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- [`unexpected alert open`](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

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

- [Elementattribut abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetElementAttribute) Befehl
- _[Was ist der Unterschied zwischen Eigenschaften und Attributen?](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html)_ auf Stack Overflow
