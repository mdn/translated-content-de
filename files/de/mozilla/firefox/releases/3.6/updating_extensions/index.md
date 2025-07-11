---
title: Aktualisierung von Erweiterungen für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_extensions
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

Dieser Artikel bietet hilfreiche Informationen für Entwickler von Erweiterungen, die versuchen, ihre Erweiterungen zu aktualisieren, damit sie richtig in Firefox 3.6 funktionieren.

## Änderungen an der Benutzeroberfläche

[Ein Rechtsklick auf Elemente (einschließlich Links und Bilder) bietet keinen "Eigenschaften"-Menüpunkt mehr an.](https://bugzil.la/513147) Das Eigenschaftendialogfeld war für die meisten Benutzer nicht nützlich und wurde entfernt. Wenn Ihre Erweiterung auf irgendeine Weise mit diesem Menüpunkt interagiert, müssen Sie Ihren Code überarbeiten, um ihn selbst hinzuzufügen, oder direkt einen eigenen Kontextmenüeintrag beisteuern.

## Änderungen am Add-on-Paket

Um die Anzeige von Add-on-Icons auch dann zu ermöglichen, wenn sie deaktiviert sind, hat Gecko 1.9.2 die Unterstützung für das automatische Erkennen und Verwenden eines Icons namens `icon.png` hinzugefügt, das sich im Stammverzeichnis des Add-ons befindet. Dies wird verwendet, wenn das Add-on deaktiviert ist oder wenn im Manifest kein `iconURL`-Eintrag vorhanden ist.

## HTML 5 Konformitätsverbesserungen

Die DOM Level 2 Ansichten für HTML- und XHTML-Dokumente sind nun gemäß HTML 5 vereinheitlicht.

- Die [`localName`](/de/docs/Web/API/Element/localName) DOM-Eigenschaft gibt nun den Namen der HTML-Elementknoten in Kleinbuchstaben zurück. Zuvor wurde in HTML-Dokumenten der Name in Großbuchstaben zurückgegeben. (DOM Level 1 [`tagName`](/de/docs/Web/API/Element/tagName) gibt weiterhin in HTML-Dokumenten Großbuchstaben zurück.)
- Die [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) DOM-Eigenschaft gibt nun `"http://www.w3.org/1999/xhtml"` auf HTML-Elementknoten zurück. Zuvor wurde in HTML-Dokumenten `null` zurückgegeben.
- `document.createElementNS(null, "FOO")` erstellt keinen HTML-Elementknoten mehr in HTML-Dokumenten. `document.createElement("FOO")` oder `document.createElementNS("http://www.w3.org/1999/xhtml", "foo")` funktionieren weiterhin in HTML-Dokumenten.
- Die [`name`](/de/docs/Web/XML/XPath/Reference/Functions/name) und die [`local-name`](/de/docs/Web/XML/XPath/Reference/Functions/local-name) Funktionen in XPath geben den Namen der HTML-Elemente in Kleinbuchstaben zurück. Zuvor wurde in HTML-Dokumenten der Name in Großbuchstaben zurückgegeben.

Das wahrscheinlichste Upgrade-Problem ist das Muster `if (elt.localName === "FOO")`.

### Beispiel: Testen, ob ein Element ein HTML-img-Element ist

#### Firefox 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt.localName === "img" && elt.namespaceURI === "http://www.w3.org/1999/xhtml")`

#### Firefox 3.5 und 3.6, nur erweiterungsgeliefertes text/html ohne fremde (z. B. SVG) skript-eingefügte Elemente

`if (elt.tagName === "IMG")`

#### Firefox 3.5 und 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt instanceof HTMLImageElement)`

## contents.rdf wird nicht mehr unterstützt

Die Unterstützung für die veraltete `contents.rdf`-Methode zur Registrierung von Chrome wurde in Gecko 1.9.2 entfernt und wird von Firefox 3.6 nicht mehr unterstützt. Das bedeutet, dass Erweiterungen, die contents.rdf verwenden, nicht mehr installiert werden können.

Stellen Sie sicher, dass Sie eine [chrome.manifest](/de/docs/Chrome_Registration) in Ihr XPI einfügen.

> [!NOTE]
> Add-ons, die bereits mit der alten contents.rdf-Methode zur Registrierung von Chrome installiert wurden, funktionieren weiterhin, wenn sie bereits installiert sind. Stellen Sie sicher, dass Sie Ihr Add-on testen, indem Sie es tatsächlich entfernen und neu installieren, um sicherzustellen, dass die Installation nach der Aktualisierung auf die Verwendung eines Installationsmanifests funktioniert.
