---
title: Get Element Property
slug: Web/WebDriver/Commands/GetElementProperty
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Get Element Property_ [Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Eigenschaft des referenzierten [Web-Elements](/de/docs/Web/WebDriver/WebElement) zurück. Bei `<input value=foo>`, wo der Benutzer den Wert in `bar` ändert, wird die Eigenschaft `bar` zurückgegeben anstelle des ursprünglichen Wertes `foo`. Dies entspricht dem Zugriff auf die Eigenschaft des Elements.

## Syntax

| Methode | URI-Vorlage                                                 |
| ------- | ------------------------------------------------------------ |
| `GET`   | `/session/{session id}/element/{element id}/property/{name}` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `element id`
  - : Kennung des [Web-Elements](/de/docs/Web/WebDriver/WebElement), um den Tag-Namen zu erhalten.
- `name`
  - : Kennung der Eigenschaft des [Web-Elements](/de/docs/Web/WebDriver/WebElement), die abgefragt werden soll.

### Fehler

- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- [Unerwartetes Warnfenster offen](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

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

- [Get Element Attribute](/de/docs/Web/WebDriver/Commands/GetElementAttribute)-Befehl
- _[Was ist der Unterschied zwischen Eigenschaften und Attributen?](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html)_ auf Stack Overflow
