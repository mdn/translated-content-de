---
title: Aktualisierung von Erweiterungen für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_extensions
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{FirefoxSidebar}}

Dieser Artikel bietet hilfreiche Informationen für Erweiterungsentwickler, die versuchen, ihre Erweiterungen so zu aktualisieren, dass sie ordnungsgemäß in Firefox 3.6 funktionieren.

## Änderungen an der Benutzeroberfläche

[Das Rechtsklicken auf Elemente (einschließlich Links und Bilder) bietet keinen "Eigenschaften"-Menüeintrag mehr an.](https://bugzil.la/513147) Der Eigenschaften-Dialog war für die meisten Benutzer nicht nützlich und wurde entfernt. Wenn Ihre Erweiterung in irgendeiner Weise mit diesem Menüpunkt interagiert, müssen Sie Ihren Code überarbeiten, um ihn selbst hinzuzufügen, oder direkt Ihren eigenen Eintrag im Kontextmenü hinzufügen.

## Änderungen am Add-on-Paket

Um zu ermöglichen, dass die Symbole von Add-ons auch angezeigt werden, wenn sie deaktiviert sind, wurde in Gecko 1.9.2 die Unterstützung für die automatische Erkennung und Verwendung eines Symbols namens `icon.png`, das sich im Stammverzeichnis des Add-ons befindet, hinzugefügt. Dieses Symbol wird verwendet, wenn das Add-on deaktiviert ist oder wenn im Manifest kein `iconURL`-Eintrag vorhanden ist.

## Verbesserungen der HTML-5-Konformität

Die DOM-Level-2-Ansichten zu HTML- und XHTML-Dokumenten wurden nun gemäß HTML 5 vereinheitlicht.

- Die DOM-Eigenschaft [`localName`](/de/docs/Web/API/Element/localName) gibt jetzt den Namen von HTML-Elementknoten in Kleinbuchstaben zurück. Zuvor gab sie ihn in HTML-Dokumenten in Großbuchstaben zurück. (DOM-Level-1 [`tagName`](/de/docs/DOM/node.tagName) gibt in HTML-Dokumenten weiterhin Großbuchstaben zurück.)
- Die DOM-Eigenschaft [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) gibt jetzt `"http://www.w3.org/1999/xhtml"` für HTML-Elementknoten zurück. Zuvor gab sie in HTML-Dokumenten `null` zurück.
- `document.createElementNS(null, "FOO")` erstellt in HTML-Dokumenten keinen HTML-Elementknoten mehr. `document.createElement("FOO")`
  oder `document.createElementNS("http://www.w3.org/1999/xhtml", "foo")` funktionieren weiterhin in HTML-Dokumenten.
- Die [`name`](/de/docs/Web/XML/XPath/Reference/Functions/name)- und die [`local-name`](/de/docs/Web/XML/XPath/Reference/Functions/local-name)-Funktionen in XPath geben die Namen von HTML-Elementen in Kleinbuchstaben zurück. Zuvor gaben sie diese in HTML-Dokumenten in Großbuchstaben zurück.

Das wahrscheinlichste Update-Problem ist das Muster `if (elt.localName === "FOO")`.

### Beispiel: Prüfen, ob ein Element ein HTML-Img-Element ist

#### Firefox 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt.localName === "img" && elt.namespaceURI === "http://www.w3.org/1999/xhtml")`

#### Firefox 3.5 und 3.6, nur von der Erweiterung geliefertes text/html ohne fremde (z. B. SVG) skript-eingefügte Elemente

`if (elt.tagName === "IMG")`

#### Firefox 3.5 und 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt instanceof HTMLImageElement)`

## contents.rdf wird nicht mehr unterstützt

Die Unterstützung für die veraltete Methode `contents.rdf` zur Registrierung von Chrome wurde in Gecko 1.9.2 entfernt und wird von Firefox 3.6 nicht mehr unterstützt. Das bedeutet, dass Add-ons, die `contents.rdf` verwenden, nicht mehr installiert werden können.

Stellen Sie sicher, dass Sie ein [chrome.manifest](/de/docs/Chrome_Registration) in Ihre XPI-Datei aufnehmen.

> [!NOTE]
> Add-ons, die bereits mit der alten `contents.rdf`-Methode zur Registrierung von Chrome installiert sind, werden weiterhin funktionieren, sofern sie bereits installiert sind. Stellen Sie sicher, dass Sie Ihr Add-on testen, indem Sie es tatsächlich entfernen und erneut installieren, um sicherzustellen, dass die Installation nach dem Aktualisieren auf ein Installationsmanifest funktioniert.
