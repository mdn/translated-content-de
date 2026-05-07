---
title: Abrufen des Elementattributs
slug: Web/WebDriver/Reference/Classic/Commands/GetElementAttribute
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der _Abrufen des Elementattributs_ [Befehl](/de/docs/Web/WebDriver/Reference/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt den Wert zurück, der mit dem Attribut des angegebenen Namens des referenzierten [Webelements](/de/docs/Web/WebDriver/Reference/WebElement) verknüpft ist. Für boolesche Attribute ist der zugeordnete Wert `"true"`, wenn vorhanden. Fehlende Attribute geben `null` zurück. Es ist gleichbedeutend mit dem Aufruf von [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) auf dem Element in JavaScript.

## Syntax

| Methode | URI-Vorlage                                                   |
| ------- | ------------------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/attribute/{name}` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.
- `element id`
  - : Bezeichner des [Webelements](/de/docs/Web/WebDriver/Reference/WebElement), dessen Tag-Name abgerufen werden soll.
- `name`
  - : Bezeichner des Attributs des [Webelements](/de/docs/Web/WebDriver/Reference/WebElement), das abgerufen werden soll.

### Fehler

- [`session not created`](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
  - : Die Sitzung existiert nicht.
- [`no such window`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hindeutet, dass die Registerkarte oder das Fenster geschlossen wurde.
- [`unexpected alert open`](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

## Beispiele

Python:

```python
from selenium import webdriver

session = webdriver.Firefox()
session.get("https://google.com/?hl=en")
search_box = session.find_element_by_id("q")

print(search_box.get_attribute("id"))
```

Ausgabe:

```plain
q
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
