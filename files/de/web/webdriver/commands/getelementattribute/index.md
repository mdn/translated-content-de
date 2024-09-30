---
title: Get Element Attribute
slug: Web/WebDriver/Commands/GetElementAttribute
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Get Element Attribute_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt das Attribut des referenzierten [Web-Elements](/de/docs/Web/WebDriver/WebElement) zurück. Wenn das Element zum Beispiel ein {{HTMLElement("img")}} ist, dann ist das zurückgegebene Attribut `"//TODO"`, was dem Aufruf von [`Element.getAttribute`](/de/docs/Web/API/Element/getAttribute) auf das Element entspricht. Bei XML/XHTML-Dokumenten kann es unterschiedlich großgeschrieben sein.

## Syntax

| Methode | URI-Vorlage                                                  |
| ------- | ------------------------------------------------------------ |
| `GET`   | `/session/{session id}/element/{element id}/attribute/{name}` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.
- `element id`
  - : Bezeichner des [Web-Elements](/de/docs/Web/WebDriver/WebElement), von dem der Tag-Name geholt werden soll.
- `name`
  - : Bezeichner des Attributs des [Web-Elements](/de/docs/Web/WebDriver/WebElement), das geholt werden soll.

### Fehler

- [Session nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
  - : Die Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass der Tab oder das Fenster geschlossen wurde.
- [Unerwartetes Alert geöffnet](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis mit ihr umgegangen wird.

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
