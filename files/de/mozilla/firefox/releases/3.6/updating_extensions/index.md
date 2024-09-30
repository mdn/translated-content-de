---
title: Aktualisieren von Erweiterungen für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_extensions
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet hilfreiche Informationen für Erweiterungsentwickler, die versuchen, ihre Erweiterungen so zu aktualisieren, dass sie ordnungsgemäß in Firefox 3.6 funktionieren.

## Änderungen an der Benutzeroberfläche

[Rechtsklick auf Elemente (einschließlich Links und Bilder) bietet kein "Eigenschaften"-Menü mehr an.](https://bugzil.la/513147) Das Eigenschaften-Dialogfeld war für die meisten Benutzer nicht hilfreich und wurde entfernt. Wenn Ihre Erweiterung in irgendeiner Weise mit diesem Menüpunkt interagiert, müssen Sie Ihren Code überarbeiten, um ihn selbst hinzuzufügen, oder direkt einen eigenen Kontextmenüeintrag beisteuern.

## Änderungen am Add-on-Paket

Um zu ermöglichen, dass die Symbole von Add-ons auch dann angezeigt werden, wenn sie deaktiviert sind, hat Gecko 1.9.2 die Unterstützung für die automatische Erkennung und Verwendung eines Symbols namens `icon.png`, das sich im Stammverzeichnis des Add-ons befindet, hinzugefügt. Dies wird verwendet, wenn das Add-on deaktiviert ist oder wenn im Manifest ein `iconURL`-Eintrag fehlt.

## Verbesserungen der HTML-5-Konformität

Die DOM-Level-2-Ansichten für HTML- und XHTML-Dokumente sind nun gemäß HTML 5 vereinheitlicht.

- Die DOM-Eigenschaft [`localName`](/de/docs/Web/API/Element/localName) gibt nun den Namen von HTML-Elementknoten in Kleinbuchstaben zurück. Zuvor gab sie in HTML-Dokumenten den Namen in Großbuchstaben zurück. (DOM-Level-1 [`tagName`](/de/docs/DOM/node.tagName) setzt dies in HTML-Dokumenten weiterhin in Großbuchstaben fort.)
- Die DOM-Eigenschaft [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) gibt nun `"http://www.w3.org/1999/xhtml"` bei HTML-Elementknoten zurück. Früher gab sie in HTML-Dokumenten `null` zurück.
- `document.createElementNS(null, "FOO")` erstellt keinen HTML-Elementknoten mehr in HTML-Dokumenten. Sowohl `document.createElement("FOO")` als auch `document.createElementNS("http://www.w3.org/1999/xhtml", "foo")` funktionieren weiterhin in HTML-Dokumenten.
- Die Funktionen [`name`](/de/docs/Web/XPath/Functions/name) und [`local-name`](/de/docs/Web/XPath/Functions/local-name) in XPath geben den Namen von HTML-Elementen in Kleinbuchstaben zurück. Zuvor gaben sie in HTML-Dokumenten den Namen in Großbuchstaben zurück.

Das wahrscheinlichste Upgrade-Problem ist das Muster `if (elt.localName === "FOO")`.

### Beispiel: Überprüfen, ob ein Element ein HTML-`<img>`-Element ist

#### Firefox 3.6, sowohl `text/html` als auch `application/xhtml+xml`

`if (elt.localName === "img" && elt.namespaceURI === "http://www.w3.org/1999/xhtml")`

#### Firefox 3.5 und 3.6, nur von der Erweiterung bereitgestelltes `text/html` ohne fremde (z.B. SVG) skript-eingefügte Elemente

`if (elt.tagName === "IMG")`

#### Firefox 3.5 und 3.6, sowohl `text/html` als auch `application/xhtml+xml`

`if (elt instanceof HTMLImageElement)`

## `contents.rdf` wird nicht mehr unterstützt

Die Unterstützung für die veraltete `contents.rdf`-Methode zur Registrierung von Chrome wurde in Gecko 1.9.2 entfernt und wird von Firefox 3.6 nicht mehr unterstützt. Das bedeutet, dass Add-ons, die `contents.rdf` verwenden, nicht mehr installiert werden können.

Stellen Sie sicher, dass Sie eine [chrome.manifest](/de/docs/Chrome_Registration) in Ihrem XPI einfügen.

> [!NOTE]
> Add-ons, die bereits mit der alten `contents.rdf`-Methode zum Registrieren von Chrome installiert sind, funktionieren weiterhin, wenn sie bereits installiert sind. Stellen Sie sicher, dass Sie Ihr Add-on tatsächlich durch Entfernen und erneutes Installieren testen, um sicherzustellen, dass die Installation nach der Aktualisierung auf die Verwendung eines Installations-Manifests funktioniert.
