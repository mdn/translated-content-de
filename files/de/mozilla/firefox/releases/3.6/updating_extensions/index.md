---
title: Erweiterungen für Firefox 3.6 aktualisieren
slug: Mozilla/Firefox/Releases/3.6/Updating_extensions
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet hilfreiche Informationen für Entwickler von Erweiterungen, die ihre Erweiterungen so aktualisieren möchten, dass sie korrekt mit Firefox 3.6 funktionieren.

## Änderungen an der Benutzeroberfläche

[Das Rechtsklick-Menü auf Elemente (einschließlich Links und Bilder) bietet keinen Menüpunkt "Eigenschaften" mehr an.](https://bugzil.la/513147) Das Eigenschaften-Dialogfeld war für die meisten Benutzer nicht nützlich und wurde entfernt. Wenn Ihre Erweiterung mit diesem Menüpunkt in irgendeiner Weise interagiert, müssen Sie Ihren Code anpassen, um ihn selbst hinzuzufügen oder einen eigenen Kontextmenüeintrag direkt zu erstellen.

## Änderungen am Add-on-Paket

Um zu ermöglichen, dass die Symbole von Add-ons angezeigt werden, selbst wenn sie deaktiviert sind, hat Gecko 1.9.2 Unterstützung hinzugefügt, um automatisch ein Symbol namens `icon.png` zu erkennen und zu nutzen, das sich im Stammverzeichnis des Add-ons befindet. Dies wird verwendet, wenn das Add-on deaktiviert ist oder wenn im Manifest keine `iconURL`-Einträge vorhanden sind.

## HTML 5 Konformitätsverbesserungen

Die DOM Level 2 Sichten zu HTML- und XHTML-Dokumenten sind nun gemäß HTML 5 vereinheitlicht.

- Die [`localName`](/de/docs/Web/API/Element/localName) DOM-Eigenschaft gibt nun den Namen von HTML-Elementknoten in Kleinbuchstaben zurück. Zuvor wurde er in HTML-Dokumenten in Großbuchstaben zurückgegeben. (DOM Level 1 [`tagName`](/de/docs/DOM/node.tagName) gibt weiterhin Großbuchstaben in HTML-Dokumenten zurück.)
- Die [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) DOM-Eigenschaft gibt nun `"http://www.w3.org/1999/xhtml"` auf HTML-Elementknoten zurück. Zuvor wurde in HTML-Dokumenten `null` zurückgegeben.
- `document.createElementNS(null, "FOO")` erstellt keine HTML-Elementknoten mehr in HTML-Dokumenten. `document.createElement("FOO")` oder `document.createElementNS("http://www.w3.org/1999/xhtml", "foo")` funktionieren weiterhin in HTML-Dokumenten.
- Die Funktionen [`name`](/de/docs/Web/XPath/Functions/name) und [`local-name`](/de/docs/Web/XPath/Functions/local-name) in XPath geben den Namen von HTML-Elementen in Kleinbuchstaben zurück. Zuvor wurde er in HTML-Dokumenten in Großbuchstaben zurückgegeben.

Das wahrscheinlichste Upgrade-Problem ist das Muster `if (elt.localName === "FOO")`.

### Beispiel: Prüfen, ob ein Element ein HTML img-Element ist

#### Firefox 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt.localName === "img" && elt.namespaceURI === "http://www.w3.org/1999/xhtml")`

#### Firefox 3.5 und 3.6, nur von Erweiterungen gelieferte text/html ohne fremde (z.B. SVG) skript-eingefügte Elemente

`if (elt.tagName === "IMG")`

#### Firefox 3.5 und 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt instanceof HTMLImageElement)`

## contents.rdf wird nicht mehr unterstützt

Die Unterstützung für die veraltete `contents.rdf`-Methode zur Registrierung von Chrome wurde in Gecko 1.9.2 entfernt und wird von Firefox 3.6 nicht mehr unterstützt. Das bedeutet, dass Add-ons, die contents.rdf verwenden, nicht mehr installiert werden können.

Stellen Sie sicher, dass Sie eine [chrome.manifest](/de/docs/Chrome_Registration) in Ihrem XPI enthalten.

> [!NOTE]
> Add-ons, die bereits mit der alten contents.rdf-Methode zur Registrierung von Chrome installiert wurden, funktionieren weiterhin, wenn sie bereits installiert sind. Stellen Sie sicher, dass Sie Ihr Add-on testen, indem Sie es tatsächlich entfernen und neu installieren, um sicherzustellen, dass die Installation funktioniert, nachdem Sie es auf die Verwendung eines Installationsmanifests aktualisiert haben.
