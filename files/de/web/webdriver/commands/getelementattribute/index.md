---
title: Elementattribut abrufen
slug: Web/WebDriver/Commands/GetElementAttribute
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der Befehl _Elementattribut abrufen_ der [WebDriver](/de/docs/Web/WebDriver) API gibt das Attribut des referenzierten [Webelements](/de/docs/Web/WebDriver/WebElement) zurück. Wenn das Element zum Beispiel ein {{HTMLElement("img")}} ist, ist das zurückgegebene Attribut `"//TODO"`, was einem Aufruf von {{domxref("Element.getAttribute")}} auf dem Element entspricht. Bei XML/XHTML-Dokumenten kann die Groß-/Kleinschreibung anders sein.

## Syntax

| Methode | URI-Vorlage                                                   |
| ------- | ------------------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/attribute/{name}` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.
- `element id`
  - : Bezeichner des [Webelements](/de/docs/Web/WebDriver/WebElement), dessen Tag-Name abgerufen werden soll.
- `name`
  - : Bezeichner des Attributs des [Webelements](/de/docs/Web/WebDriver/WebElement), das abgerufen werden soll.

### Fehler

- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
  - : Die Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- [Unerwartetes geöffnetes Alert](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wurde.

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

## Browserkompatibilität

{{Compat}}
