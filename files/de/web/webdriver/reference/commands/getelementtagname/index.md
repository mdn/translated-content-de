---
title: Tag-Namen des Elements abrufen
slug: Web/WebDriver/Reference/Commands/GetElementTagName
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der _Tag-Namen des Elements abrufen_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt den Tag-Namen des referenzierten [Webelements](/de/docs/Web/WebDriver/WebElement) zurück. Wenn das Element zum Beispiel ein {{HTMLElement("img")}} ist, wird der Tag-Name `"IMG"` zurückgegeben, was dem Aufruf von [`Element.tagName`](/de/docs/Web/API/Element/tagName) auf dem Element entspricht. Bei XML/XHTML-Dokumenten kann die Groß- und Kleinschreibung unterschiedlich sein.

## Syntax

| Methode | URI-Vorlage                                       |
| ------- | ------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/name` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.
- `element id`
  - : Bezeichner des [Webelements](/de/docs/Web/WebDriver/WebElement), dessen Tag-Name abgerufen werden soll.

### Fehler

- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hindeutet, dass der Tab oder das Fenster geschlossen wurde.
- [Unerwartetes Alert geöffnet](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

## Beispiele

Python:

```python
from selenium import webdriver

session = webdriver.Firefox()
session.get("https://google.com/?hl=en")
search_box = driver.find_element_by_id("q")

print(search_box.tag_name)
```

Ausgabe:

```plain
INPUT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
