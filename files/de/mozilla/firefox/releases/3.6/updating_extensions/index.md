---
title: Aktualisieren von Erweiterungen für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_extensions
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

{{FirefoxSidebar}}

Dieser Artikel bietet hilfreiche Informationen für Erweiterungsentwickler, die versuchen, ihre Erweiterungen für die ordnungsgemäße Funktion in Firefox 3.6 zu aktualisieren.

## Änderungen an der Benutzeroberfläche

[Ein Rechtsklick auf Elemente (einschließlich Links und Bilder) bietet nicht mehr das Menüelement "Eigenschaften" an.](https://bugzil.la/513147) Das Eigenschaftendialogfeld war für die meisten Benutzer nicht nützlich und wurde entfernt. Wenn Ihre Erweiterung in irgendeiner Weise mit diesem Menüelement interagiert, müssen Sie Ihren Code überarbeiten, um es selbst hinzuzufügen, oder direkt Ihren eigenen Kontextmenüeintrag beisteuern.

## Änderungen am Add-on-Paket

Um zu ermöglichen, dass Symbole von Add-ons auch angezeigt werden, wenn sie deaktiviert sind, hat Gecko 1.9.2 die Unterstützung für die automatische Erkennung und Verwendung eines Symbols namens `icon.png` hinzugefügt, das sich im Stammverzeichnis des Add-ons befindet. Dies wird verwendet, wenn das Add-on deaktiviert ist oder wenn dem Manifest ein `iconURL`-Eintrag fehlt.

## HTML 5-Konformitätsverbesserungen

Die DOM Level 2-Ansichten für HTML- und XHTML-Dokumente sind jetzt gemäß HTML 5 vereinheitlicht.

- Die DOM-Eigenschaft [`localName`](/de/docs/Web/API/Element/localName) gibt jetzt den Namen von HTML-Elementknoten in Kleinbuchstaben zurück. Zuvor wurde es in HTML-Dokumenten in Großbuchstaben zurückgegeben. (DOM-Level 1 [`tagName`](/de/docs/DOM/node.tagName) gibt weiterhin Großbuchstaben in HTML-Dokumenten zurück.)
- Die DOM-Eigenschaft [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) gibt jetzt `"http://www.w3.org/1999/xhtml"` bei HTML-Elementknoten zurück. Zuvor wurde es in HTML-Dokumenten als `null` zurückgegeben.
- `document.createElementNS(null, "FOO")` erzeugt in HTML-Dokumenten keine HTML-Elementknoten mehr. `document.createElement("FOO")` oder `document.createElementNS("http://www.w3.org/1999/xhtml", "foo")` funktionieren weiterhin in HTML-Dokumenten.
- Die Funktionen [`name`](/de/docs/Web/XPath/Reference/Functions/name) und [`local-name`](/de/docs/Web/XPath/Reference/Functions/local-name) in XPath geben den Namen von HTML-Elementen in Kleinbuchstaben zurück. Zuvor wurde es in HTML-Dokumenten in Großbuchstaben zurückgegeben.

Das wahrscheinlichste Upgrade-Problem ist das Muster `if (elt.localName === "FOO")`.

### Beispiel: Testen, ob ein Element ein HTML-Img-Element ist

#### Firefox 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt.localName === "img" && elt.namespaceURI === "http://www.w3.org/1999/xhtml")`

#### Firefox 3.5 und 3.6, nur von der Erweiterung bereitgestellte text/html ohne fremde (z. B. SVG) skript-eingefügte Elemente

`if (elt.tagName === "IMG")`

#### Firefox 3.5 und 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt instanceof HTMLImageElement)`

## contents.rdf wird nicht mehr unterstützt

Die Unterstützung der veralteten `contents.rdf`-Methode zur Registrierung von Chrome wurde in Gecko 1.9.2 entfernt und wird von Firefox 3.6 nicht mehr unterstützt. Das bedeutet, dass Add-ons, die contents.rdf verwenden, nicht mehr installiert werden können.

Stellen Sie sicher, dass Sie eine [chrome.manifest](/de/docs/Chrome_Registration) in Ihr XPI aufnehmen.

> [!NOTE]
> Add-ons, die bereits mit der alten contents.rdf-Methode zur Registrierung von Chrome installiert sind, funktionieren weiterhin, wenn sie bereits installiert sind. Stellen Sie sicher, dass Sie Ihr Add-on testen, indem Sie es tatsächlich entfernen und neu installieren, um sicherzustellen, dass die Installation nach der Aktualisierung auf die Verwendung eines Installationsmanifests funktioniert.
