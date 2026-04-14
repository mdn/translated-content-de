---
title: Attribut eines Elements abrufen
slug: Web/WebDriver/Reference/Classic/Commands/GetElementAttribute
l10n:
  sourceCommit: b666ae21090eec89e76789635c2774452ed68281
---

Der _Attribut eines Elements abrufen_- [Befehl](/de/docs/Web/WebDriver/Reference/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt den Wert zurück, der mit dem Attribut des angegebenen Namens des referenzierten [Webelements](/de/docs/Web/WebDriver/Reference/WebElement) verknüpft ist. Für boolesche Attribute ist der zugeordnete Wert `"true"`, wenn er vorhanden ist. Fehlende Attribute geben `null` zurück. Dies entspricht dem Aufruf von [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) am Element in JavaScript.

## Syntax

| Methode | URI-Vorlage                                                   |
| ------- | ------------------------------------------------------------- |
| `GET`   | `/session/{session id}/element/{element id}/attribute/{name}` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.
- `element id`
  - : Kennung des [Webelements](/de/docs/Web/WebDriver/Reference/WebElement), um den Tag-Namen abzurufen.
- `name`
  - : Kennung des Attributs des [Webelements](/de/docs/Web/WebDriver/Reference/WebElement), das abgerufen werden soll.

### Fehler

- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Das [`window`](/de/docs/Web/API/Window)-Objekt wurde verworfen, was darauf hinweist, dass die Registerkarte oder das Fenster geschlossen wurde.
- [Unerwartetes geöffnetes Alert](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.

## Beispiele

Python:

```python
from selenium import webdriver

session = webdriver.Firefox()
session.get("https://google.com/?hl=en")
search_box = session.find_element_by_id("q")

print(search_box.get_attribute("id"))
```

Output:

```plain
q
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
