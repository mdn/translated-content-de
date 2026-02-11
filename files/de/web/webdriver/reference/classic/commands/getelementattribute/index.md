---
title: Abrufen eines Elementattributs
slug: Web/WebDriver/Reference/Classic/Commands/GetElementAttribute
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der _Abrufen eines Elementattributs_ [Befehl](/de/docs/Web/WebDriver/Reference/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt das Attribut des referenzierten [Web-Elements](/de/docs/Web/WebDriver/Reference/WebElement) zurück. Wenn das Element beispielsweise ein {{HTMLElement("img")}} ist, wird das Attribut `"//TODO"` zurückgegeben, was dem Aufruf von [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) auf dem Element entspricht. Für XML/XHTML-Dokumente kann es unterschiedlich großgeschrieben werden.

## Syntax

| Methode | URI-Vorlage                                                   |
| ------- | ------------------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/attribute/{name}` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `element id`
  - : Kennung des [Web-Elements](/de/docs/Web/WebDriver/Reference/WebElement), dessen Tag-Name abgerufen werden soll.
- `name`
  - : Kennung des Attributs des [Web-Elements](/de/docs/Web/WebDriver/Reference/WebElement), das abgerufen werden soll.

### Fehler

- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
  - : Die Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- [Unerwartete Warnmeldung geöffnet](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

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
