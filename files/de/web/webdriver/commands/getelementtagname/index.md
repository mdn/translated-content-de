---
title: Get Element Tag Name
slug: Web/WebDriver/Commands/GetElementTagName
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Get Element Tag Name_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt den Tag-Namen des referenzierten [Web-Elements](/de/docs/Web/WebDriver/WebElement) zurück. Wenn das Element zum Beispiel ein {{HTMLElement("img")}} ist, lautet der zurückgegebene Tag-Name `"IMG"`, was dem Aufruf von [`Element.tagName`](/de/docs/Web/API/Element/tagName) auf dem Element entspricht. Bei XML/XHTML-Dokumenten kann er unterschiedlich großgeschrieben sein.

## Syntax

| Methode | URI-Vorlage                                       |
| ------- | ------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/name` |

### URL-Parameter

- `session id`
  - : Identifikator der Sitzung.
- `element id`
  - : Identifikator des [Web-Elements](/de/docs/Web/WebDriver/WebElement), dessen Tag-Name abgerufen werden soll.

### Fehler

- [Session nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- [Unerwartetes geöffnetes Alert](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Ein Benutzerdialog, wie etwa [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis er behandelt wird.

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
