---
title: Aktualisieren von Erweiterungen für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_extensions
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet hilfreiche Informationen für Entwickler von Erweiterungen, die versuchen, ihre Erweiterungen so zu aktualisieren, dass sie ordnungsgemäß in Firefox 3.6 funktionieren.

## Änderungen der Benutzeroberfläche

[Das Rechtsklicken auf Elemente (einschließlich Links und Bilder) bietet nicht mehr den Menüpunkt "Eigenschaften" an.](https://bugzil.la/513147) Das Eigenschaften-Dialogfeld war für die meisten Benutzer nicht nützlich und wurde entfernt. Wenn Ihre Erweiterung auf irgendeine Weise mit diesem Menüpunkt interagiert, müssen Sie Ihren Code überarbeiten, um ihn selbst hinzuzufügen, oder direkt einen eigenen Eintrag im Kontextmenü bereitstellen.

## Änderungen im Add-on-Paket

Um zu ermöglichen, dass Icons von Add-ons auch dann angezeigt werden, wenn sie deaktiviert sind, hat Gecko 1.9.2 die Unterstützung für das automatische Erkennen und Verwenden eines Icons namens `icon.png`, das sich im Root-Verzeichnis des Add-ons befindet, hinzugefügt. Dies wird verwendet, wenn das Add-on deaktiviert ist oder wenn im Manifest ein `iconURL`-Eintrag fehlt.

## Verbesserungen der HTML-5-Konformität

Die DOM Level 2 Ansichten für HTML- und XHTML-Dokumente sind nun gemäß HTML 5 vereinheitlicht.

- Die [`localName`](/de/docs/Web/API/Element/localName) DOM-Eigenschaft gibt jetzt den Namen der HTML-Elementknoten in Kleinbuchstaben zurück. Zuvor wurde in HTML-Dokumenten der Name in Großbuchstaben zurückgegeben. (Die DOM Level 1 [`tagName`](/de/docs/DOM/node.tagName) bleibt in HTML-Dokumenten weiterhin in Großbuchstaben.)
- Die [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) DOM-Eigenschaft gibt jetzt `"http://www.w3.org/1999/xhtml"` auf HTML-Elementknoten zurück. Zuvor wurde in HTML-Dokumenten `null` zurückgegeben.
- `document.createElementNS(null, "FOO")` erstellt keinen HTML-Elementknoten mehr in HTML-Dokumenten. `document.createElement("FOO")` oder `document.createElementNS("http://www.w3.org/1999/xhtml", "foo")` funktionieren weiterhin in HTML-Dokumenten.
- Die Funktionen [`name`](/de/docs/Web/XML/XPath/Reference/Functions/name) und [`local-name`](/de/docs/Web/XML/XPath/Reference/Functions/local-name) in XPath geben den Namen von HTML-Elementen in Kleinbuchstaben zurück. Zuvor wurde in HTML-Dokumenten der Name in Großbuchstaben zurückgegeben.

Das wahrscheinlichste Aktualisierungsproblem ist das Muster `if (elt.localName === "FOO")`.

### Beispiel: Testen, ob ein Element ein HTML-Img-Element ist

#### Firefox 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt.localName === "img" && elt.namespaceURI === "http://www.w3.org/1999/xhtml")`

#### Firefox 3.5 und 3.6, nur von der Erweiterung bereitgestelltes text/html ohne fremde (z. B. SVG) skripteingefügte Elemente

`if (elt.tagName === "IMG")`

#### Firefox 3.5 und 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt instanceof HTMLImageElement)`

## contents.rdf wird nicht mehr unterstützt

Die Unterstützung für die veraltete Methode `contents.rdf` zur Registrierung von Chrome wurde in Gecko 1.9.2 entfernt und wird von Firefox 3.6 nicht mehr unterstützt. Das bedeutet, dass Add-ons, die `contents.rdf` verwenden, nicht mehr installiert werden können.

Stellen Sie sicher, dass Sie eine [chrome.manifest](/de/docs/Chrome_Registration) in Ihr XPI einfügen.

> [!NOTE]
> Add-ons, die bereits mit der alten Methode `contents.rdf` zur Registrierung von Chrome installiert wurden, funktionieren weiterhin, wenn sie bereits installiert sind. Stellen Sie sicher, dass Sie Ihr Add-on tatsächlich durch Entfernen und erneutes Installieren testen, um sicherzustellen, dass die Installation nach der Aktualisierung auf die Verwendung eines Installationsmanifests funktioniert.
