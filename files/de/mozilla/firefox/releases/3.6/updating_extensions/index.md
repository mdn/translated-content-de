---
title: Aktualisierung von Erweiterungen für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_extensions
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel bietet hilfreiche Informationen für Entwickler von Erweiterungen, die versuchen, ihre Erweiterungen zu aktualisieren, damit sie ordnungsgemäß in Firefox 3.6 funktionieren.

## Änderungen an der Benutzeroberfläche

[Rechtsklicks auf Elemente (einschließlich Links und Bilder) bieten nicht mehr das Menüelement "Eigenschaften" an.](https://bugzil.la/513147) Das Eigenschaftsdialogfeld war für die meisten Benutzer nicht nützlich und wurde entfernt. Wenn Ihre Erweiterung in irgendeiner Weise mit diesem Menüelement interagiert, müssen Sie Ihren Code überarbeiten, um es selbst hinzuzufügen, oder Ihren eigenen Kontextmenüeintrag direkt einfügen.

## Änderungen am Add-on-Paket

Um zu ermöglichen, dass die Symbole von Add-ons auch dann angezeigt werden, wenn sie deaktiviert sind, hat Gecko 1.9.2 die Unterstützung für die automatische Erkennung und Verwendung eines Symbols namens `icon.png`, das sich im Stammverzeichnis des Add-ons befindet, hinzugefügt. Dies wird verwendet, wenn das Add-on deaktiviert ist oder wenn im Manifest kein `iconURL`-Eintrag vorhanden ist.

## Verbesserungen der HTML 5-Konformität

Die DOM Level 2-Ansichten für HTML- und XHTML-Dokumente sind nun gemäß HTML 5 vereinheitlicht.

- Die [`localName`](/de/docs/Web/API/Element/localName) DOM-Eigenschaft gibt nun den Namen von HTML-Elementknoten in Kleinbuchstaben zurück. Zuvor wurde in HTML-Dokumenten der Name in Großbuchstaben zurückgegeben. (DOM Level 1 [`tagName`](/de/docs/Web/API/Element/tagName) gibt weiterhin in HTML-Dokumenten in Großbuchstaben zurück.)
- Die [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) DOM-Eigenschaft gibt jetzt `"http://www.w3.org/1999/xhtml"` auf HTML-Elementknoten zurück. Früher wurde in HTML-Dokumenten `null` zurückgegeben.
- `document.createElementNS(null, "FOO")` erstellt keinen HTML-Elementknoten mehr in HTML-Dokumenten. `document.createElement("FOO")`
  oder `document.createElementNS("http://www.w3.org/1999/xhtml", "foo")` funktionieren weiterhin in HTML-Dokumenten.
- Die Funktionen [`name`](/de/docs/Web/XML/XPath/Reference/Functions/name) und [`local-name`](/de/docs/Web/XML/XPath/Reference/Functions/local-name) in XPath geben den Namen von HTML-Elementen in Kleinbuchstaben zurück. Früher wurde in HTML-Dokumenten der Name in Großbuchstaben zurückgegeben.

Das wahrscheinlichste Upgrade-Problem ist das Muster `if (elt.localName === "FOO")`.

### Beispiel: Testen, ob ein Element ein HTML-img-Element ist

#### Firefox 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt.localName === "img" && elt.namespaceURI === "http://www.w3.org/1999/xhtml")`

#### Firefox 3.5 und 3.6, nur von der Erweiterung bereitgestelltes text/html ohne fremde (z. B. SVG) script-eingefügte Elemente

`if (elt.tagName === "IMG")`

#### Firefox 3.5 und 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt instanceof HTMLImageElement)`

## contents.rdf wird nicht mehr unterstützt

Die Unterstützung für die veraltete Methode `contents.rdf` zur Registrierung von Chrome wurde in Gecko 1.9.2 entfernt und wird von Firefox 3.6 nicht mehr unterstützt. Das bedeutet, dass Add-ons, die contents.rdf verwenden, nicht mehr installiert werden können.

Stellen Sie sicher, dass Sie eine [chrome.manifest](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration) in Ihrem XPI enthalten.

> [!NOTE]
> Add-ons, die bereits mit der alten contents.rdf-Methode zur Registrierung von Chrome installiert sind, funktionieren weiterhin, wenn sie bereits installiert sind. Stellen Sie sicher, dass Sie Ihr Add-on testen, indem Sie es tatsächlich entfernen und neu installieren, um sicherzustellen, dass die Installation funktioniert, nachdem Sie es auf die Verwendung eines Installationsmanifests aktualisiert haben.
