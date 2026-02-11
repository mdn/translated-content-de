---
title: Abrufen des Tag-Namens eines Elements
slug: Web/WebDriver/Reference/Classic/Commands/GetElementTagName
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der _Abrufen des Tag-Namens eines Elements_ [Befehl](/de/docs/Web/WebDriver/Reference/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt den Tag-Namen des referenzierten [Webelements](/de/docs/Web/WebDriver/Reference/WebElement) zurück. Wenn zum Beispiel das Element ein {{HTMLElement("img")}} ist, wird der zurückgegebene Tag-Name `"IMG"` sein, was dem Aufruf von [`Element.tagName`](/de/docs/Web/API/Element/tagName) auf dem Element entspricht. Bei XML/XHTML-Dokumenten kann die Groß- und Kleinschreibung unterschiedlich sein.

## Syntax

| Methode | URI-Vorlage                                       |
| ------- | ------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/name` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `element id`
  - : Kennung des [Webelements](/de/docs/Web/WebDriver/Reference/WebElement), von dem der Tag-Name abgerufen werden soll.

### Fehler

- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- [Unerwartetes geöffnetes Alert](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie zum Beispiel [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.

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
