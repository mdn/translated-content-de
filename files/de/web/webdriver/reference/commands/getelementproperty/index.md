---
title: Eigenschaft eines Elements abrufen
slug: Web/WebDriver/Reference/Commands/GetElementProperty
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der _Eigenschaft eines Elements abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Eigenschaft des referenzierten [Webelementes](/de/docs/Web/WebDriver/WebElement) zurück. In dem Fall `<input value=foo>`, wo der Benutzer den Wert auf `bar` ändert, wird die Eigenschaft `bar` und nicht der ursprüngliche Wert `foo` zurückgegeben. Dies entspricht dem Zugriff auf die Eigenschaft des Elements.

## Syntax

| Methode | URI-Vorlage                                                  |
| ------- | ------------------------------------------------------------ |
| `GET`   | `/session/{session id}/element/{element id}/property/{name}` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.
- `element id`
  - : Bezeichner des [Webelementes](/de/docs/Web/WebDriver/WebElement), dessen Tag-Name abgerufen werden soll.
- `name`
  - : Bezeichner der Eigenschaft des [Webelementes](/de/docs/Web/WebDriver/WebElement), die abgerufen werden soll.

### Fehler

- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
  - : Die Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window) Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- [Unerwartetes geöffnetes Benachrichtigungsfenster](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis damit umgegangen wird.

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

- [Attribut eines Elements abrufen](/de/docs/Web/WebDriver/Reference/Commands/GetElementAttribute) Befehl
- _[Was ist der Unterschied zwischen Eigenschaften und Attributen?](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html)_ auf Stack Overflow
