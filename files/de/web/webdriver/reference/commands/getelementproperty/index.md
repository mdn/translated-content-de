---
title: Elementeigenschaft abrufen
slug: Web/WebDriver/Reference/Commands/GetElementProperty
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der _Elementeigenschaft abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Eigenschaft des referenzierten [Webelements](/de/docs/Web/WebDriver/Reference/WebElement) zurück. Angenommen `<input value=foo>`, wobei der Benutzer den Wert in `bar` ändert, wird die zurückgegebene Eigenschaft `bar` anstelle des ursprünglichen Wertes `foo`. Dies entspricht dem Zugriff auf die Eigenschaft des Elements.

## Syntax

| Methode | URI-Vorlage                                                  |
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

- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window) Objekt wurde verworfen, was darauf hindeutet, dass der Tab oder das Fenster geschlossen wurde.
- [Unerwartetes geöffnetes Alert](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Ein Benutzerprompt, wie zum Beispiel [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis er bearbeitet wird.

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

- [Elementattribut abrufen](/de/docs/Web/WebDriver/Reference/Commands/GetElementAttribute) Befehl
- _[Was ist der Unterschied zwischen Eigenschaften und Attributen?](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html)_ auf Stack Overflow
