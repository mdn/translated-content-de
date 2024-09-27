---
title: Aktualisierung von Erweiterungen für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_extensions
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet hilfreiche Informationen für Entwickler von Erweiterungen, die versuchen, ihre Erweiterungen für eine ordnungsgemäße Funktion in Firefox 3.6 zu aktualisieren.

## Änderungen an der Benutzeroberfläche

[Das Rechtsklicken auf Elemente (einschließlich Links und Bilder) bietet keinen Menüpunkt "Eigenschaften" mehr an.](https://bugzil.la/513147) Das Eigenschaftendialogfeld war für die meisten Benutzer nicht nützlich und wurde entfernt. Wenn Ihre Erweiterung in irgendeiner Weise mit diesem Menüeintrag interagiert, müssen Sie Ihren Code überarbeiten, um ihn selbst hinzuzufügen, oder direkt Ihren eigenen Kontextmenüeintrag beisteuern.

## Änderungen am Add-on-Paket

Um die Anzeige von Symbolen von Add-ons auch dann zu ermöglichen, wenn sie deaktiviert sind, hat Gecko 1.9.2 die Unterstützung für das automatische Erkennen und Verwenden eines Symbols mit dem Namen `icon.png` hinzugefügt, das sich im Stammverzeichnis des Add-ons befindet. Dies wird verwendet, wenn das Add-on deaktiviert ist oder wenn im Manifest ein `iconURL`-Eintrag fehlt.

## HTML 5 Konformitätsverbesserungen

Die DOM Level 2-Ansichten zu HTML- und XHTML-Dokumenten sind jetzt gemäß HTML 5 vereinheitlicht.

- Die [`localName`](/de/docs/Web/API/Element/localName) DOM-Eigenschaft gibt nun den Namen der HTML-Elementknoten in Kleinbuchstaben zurück. Zuvor wurde er in HTML-Dokumenten in Großbuchstaben zurückgegeben. (DOM Level 1 [`tagName`](/de/docs/DOM/node.tagName) gibt weiterhin in HTML-Dokumenten in Großbuchstaben zurück.)
- Die [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) DOM-Eigenschaft gibt nun `"http://www.w3.org/1999/xhtml"` bei HTML-Elementknoten zurück. Zuvor wurde in HTML-Dokumenten `null` zurückgegeben.
- `document.createElementNS(null, "FOO")` erstellt in HTML-Dokumenten keinen HTML-Elementknoten mehr. `document.createElement("FOO")` oder `document.createElementNS("http://www.w3.org/1999/xhtml", "foo")` funktionieren weiterhin in HTML-Dokumenten.
- Die Funktionen [`name`](/de/docs/Web/XPath/Functions/name) und [`local-name`](/de/docs/Web/XPath/Functions/local-name) in XPath geben die Namen von HTML-Elementen in Kleinbuchstaben zurück. Früher wurden sie in HTML-Dokumenten in Großbuchstaben zurückgegeben.

Das wahrscheinlichste Upgrade-Problem ist das Muster `if (elt.localName === "FOO")`.

### Beispiel: Testen, ob ein Element ein HTML-Img-Element ist

#### Firefox 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt.localName === "img" && elt.namespaceURI === "http://www.w3.org/1999/xhtml")`

#### Firefox 3.5 und 3.6, nur Erweiterungstext/html ohne fremde (z.B. SVG-) skript-eingefügte Elemente

`if (elt.tagName === "IMG")`

#### Firefox 3.5 und 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt instanceof HTMLImageElement)`

## contents.rdf wird nicht mehr unterstützt

Die Unterstützung für die veraltete `contents.rdf`-Methode zur Registrierung von Chrome wurde in Gecko 1.9.2 entfernt und wird von Firefox 3.6 nicht mehr unterstützt. Das bedeutet, dass Add-ons, die contents.rdf verwenden, nicht mehr installiert werden können.

Stellen Sie sicher, dass Sie ein [chrome.manifest](/de/docs/Chrome_Registration) in Ihrem XPI enthalten.

> [!NOTE]
> Add-ons, die bereits mit der alten contents.rdf-Methode zur Registrierung von Chrome installiert sind, funktionieren weiterhin, wenn sie bereits installiert sind. Stellen Sie sicher, dass Sie Ihr Add-on tatsächlich durch Entfernen und Neuinstallation testen, um sicherzustellen, dass die Installation funktioniert, nachdem es zur Verwendung eines Installationsmanifests aktualisiert wurde.
