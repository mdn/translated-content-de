---
title: Aktualisierung von Erweiterungen für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_extensions
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet hilfreiche Informationen für Erweiterungsentwickler, die versuchen, ihre Erweiterungen so zu aktualisieren, dass sie in Firefox 3.6 ordnungsgemäß funktionieren.

## Änderungen an der Benutzeroberfläche

[Das Rechtsklicken auf Elemente (einschließlich Links und Bilder) bietet keinen Menüpunkt "Eigenschaften" mehr an.](https://bugzil.la/513147) Das Eigenschaftendialogfeld war für die meisten Benutzer nicht nützlich und wurde entfernt. Wenn Ihre Erweiterung in irgendeiner Weise mit diesem Menüpunkt interagiert, müssen Sie Ihren Code überarbeiten, um ihn selbst hinzuzufügen oder direkt einen eigenen Eintrag im Kontextmenü beizutragen.

## Änderungen am Add-on-Paket

Um zu ermöglichen, dass Symbole der Add-ons selbst dann angezeigt werden, wenn sie deaktiviert sind, hat Gecko 1.9.2 die Unterstützung für die automatische Erkennung und Verwendung eines Icons namens `icon.png` hinzugefügt, das sich im Root-Verzeichnis des Add-ons befindet. Dies wird verwendet, wenn das Add-on deaktiviert ist oder wenn das Manifest keinen `iconURL`-Eintrag enthält.

## Verbesserungen der HTML 5-Konformität

Die DOM Level 2-Ansichten für HTML- und XHTML-Dokumente sind jetzt gemäß HTML 5 vereinheitlicht.

- Die [`localName`](/de/docs/Web/API/Element/localName) DOM-Eigenschaft gibt nun den Namen von HTML-Elementknoten in Kleinbuchstaben zurück. Zuvor wurde in HTML-Dokumenten der Name in Großbuchstaben zurückgegeben. (DOM Level 1 [`tagName`](/de/docs/DOM/node.tagName) gibt weiterhin in HTML-Dokumenten in Großbuchstaben zurück.)
- Die [`namespaceURI`](/de/docs/Web/API/Element/namespaceURI) DOM-Eigenschaft gibt nun `"http://www.w3.org/1999/xhtml"` auf HTML-Elementknoten zurück. Zuvor wurde in HTML-Dokumenten `null` zurückgegeben.
- `document.createElementNS(null, "FOO")` erstellt keinen HTML-Elementknoten mehr in HTML-Dokumenten. `document.createElement("FOO")`
  oder `document.createElementNS("http://www.w3.org/1999/xhtml", "foo")` funktionieren weiterhin
  in HTML-Dokumenten.
- Die [`name`](/de/docs/Web/XML/XPath/Reference/Functions/name) und die [`local-name`](/de/docs/Web/XML/XPath/Reference/Functions/local-name)-Funktionen in XPath geben den Namen von HTML-Elementen in Kleinbuchstaben zurück. Zuvor wurden in HTML-Dokumenten die Namen in Großbuchstaben zurückgegeben.

Das wahrscheinlichste Upgrade-Problem ist das Muster `if (elt.localName === "FOO")`.

### Beispiel: Testen, ob ein Element ein HTML-img-Element ist

#### Firefox 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt.localName === "img" && elt.namespaceURI === "http://www.w3.org/1999/xhtml")`

#### Firefox 3.5 und 3.6, nur von der Erweiterung bereitgestelltes text/html ohne fremde (z. B. SVG) skriptbasierte Elemente

`if (elt.tagName === "IMG")`

#### Firefox 3.5 und 3.6, sowohl text/html als auch application/xhtml+xml

`if (elt instanceof HTMLImageElement)`

## contents.rdf wird nicht mehr unterstützt

Die Unterstützung für die veraltete `contents.rdf`-Methode zur Registrierung von Chrome wurde in Gecko 1.9.2 entfernt und wird von Firefox 3.6 nicht mehr unterstützt. Das bedeutet, dass Add-ons, die `contents.rdf` verwenden, nicht mehr installiert werden können.

Stellen Sie sicher, dass Sie eine [chrome.manifest](/de/docs/Chrome_Registration) in Ihr XPI einfügen.

> [!NOTE]
> Add-ons, die bereits mit der alten `contents.rdf`-Methode zur Registrierung von Chrome installiert wurden, funktionieren weiterhin, wenn sie bereits installiert sind. Stellen Sie sicher, dass Sie Ihr Add-on testen, indem Sie es tatsächlich entfernen und neu installieren, um sicherzustellen, dass die Installation funktioniert, nachdem Sie es aktualisiert haben, um ein Installationsmanifest zu verwenden.
