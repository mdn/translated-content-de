---
title: Rezept beisteuern
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{CSSRef}}

Wenn Sie ein Beispiel für das Layout-Kochbuch beisteuern möchten, erklärt diese Seite die Schritte, die Sie unternehmen müssen, um Ihr Beispiel zu veröffentlichen.

## Was macht ein gutes Rezept aus?

**Die einfachstmögliche Version eines nützlichen Webdesign-Musters.** Jede CSS-Zeile, die Sie hinzufügen, sollte dazu dienen, das Muster zu demonstrieren, lassen Sie also alles weg, was nur dazu dient, das Beispiel hübsch aussehen zu lassen. Die Idee ist, dass jemand das Muster nehmen und es mit eigenen Stilen in einer Website verwenden kann.

Ein Rezept besteht aus:

- Einem Live-Beispiel, gespeichert im [CSS Examples GitHub-Repository](https://github.com/mdn/css-examples).
- Einer herunterladbaren Version dieses Beispiels, ebenfalls im CSS Examples-Repository gespeichert.
- Einer Seite im Abschnitt [CSS Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) der Website, die die folgenden Komponenten enthalten sollte:

  1. Einführung
  2. Anforderungen
  3. Rezept
  4. Entscheidungen
  5. Nützliche Fallbacks oder alternative Methoden (falls relevant)
  6. Barrierefreiheitserwägungen
  7. Browser-Kompatibilität (nur für CSS-Eigenschaften, die nicht vollständig unterstützt werden)
  8. Zusätzliche Ressourcen

## Schritte zur Veröffentlichung eines Rezepts

Um ein Rezept zu erstellen und es dem CSS Layout-Kochbuch hinzuzufügen, folgen Sie diesen Schritten:

1. [Ein Muster erstellen](#1._ein_muster_erstellen)
2. [Ein Live-Beispiel erstellen](#2._ein_live-beispiel_erstellen)
3. [Eine herunterladbare Version erstellen](#3._eine_herunterladbare_version_erstellen)
4. [Einen Pull-Request mit Ihrem Beispiel öffnen](#4._einen_pull-request_mit_ihrem_beispiel_öffnen)
5. [Ihre Seite erstellen](#5._ihre_seite_erstellen)

### 1. Ein Muster erstellen

Bevor Sie Ihr Beispiel in ein Rezept verwandeln, beginnen Sie damit, Ihr Muster als einfache HTML-Seite zu erstellen. Überlegen Sie, was Sie demonstrieren möchten, und halten Sie es so einfach wie möglich. Verwenden Sie beschreibende Begriffe wie "Container" oder "Item", wenn Sie Klassennamen hinzufügen.

Stellen Sie sicher, dass Sie das HTML und CSS in mehreren Browsern, Ansichtsfenstergrößen und Geräten getestet haben. Stellen Sie außerdem sicher, dass jegliche CSS-Gestaltung den Barrierefreiheitsrichtlinien entspricht. Während es in Ordnung ist, CSS-Eigenschaften mit eingeschränkter Unterstützung zu verwenden, stellen Sie beim Erstellen der Seite sicher, dass Sie Informationen zur Browser-Kompatibilität einfügen, insbesondere im Abschnitt Browser-Kompatibilität. In einigen Fällen kann es hilfreich sein, eine zweite Version Ihres Beispiels mit Fallback-Unterstützung zu erstellen.

### 2. Ein Live-Beispiel erstellen

Die Live-Beispiele auf Kochbuchseiten, wie zum Beispiel zum [Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element), und an anderer Stelle auf MDN ermöglichen es Lesern, mit dem Code zu spielen und relevante Teile zu ändern, ohne von dem gesamten Code überwältigt zu werden. Ihr Rezept wird durch ein oder mehrere Beispiele demonstriert.

Forken Sie das [CSS Examples Repository](https://github.com/mdn/css-examples) und werfen Sie einen Blick in den Ordner `css-cookbook`. Es gibt eine Datei namens [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html). Kopieren Sie diese Datei und verwenden Sie sie als Ausgangspunkt. Speichern Sie diese im Verzeichnis `css-cookbook` mit einem Namen, der für Ihr Muster sinnvoll ist. Die Vorlage enthält Kommentare, die Sie beim Hinzufügen der verschiedenen Teile an den passenden Stellen leiten.

Die wichtigen Teile dieser Vorlage sind wie folgt:

- Es gibt ein Stylesheet für die Editor-Panels mit einigen grundlegenden Körperstilistika und eine JavaScript-Datei für die Editor-Funktionalitäten. Lassen Sie diese Dateien unverändert.

- Der `<head>` enthält zwei Style-Blöcke. Der erste Style-Block ist für Elemente, die Leser nicht ändern müssen, um mit dem Beispiel zu experimentieren. Der zweite Style-Block enthält Elemente, die Leser möglicherweise ändern möchten. Normalerweise fügen wir alle unsere CSS in den ersten Block ein, dann wählen wir die Regeln aus, die in den zweiten Block verschoben werden sollen. Die Regeln im zweiten Block sollten diejenigen sein, die grundlegend für das Muster sind, möglicherweise solche, bei denen ein Leser einen CSS-Wert ändern und das Muster sehen kann, das aktualisiert wird.

- Sie müssen das HTML für Ihre Komponente zweimal hinzufügen: zuerst im Abschnitt mit der Klasse `preview` und dann im `<textarea>` mit der Klasse `playable-html`.

- Der bearbeitbare CSS-Code aus dem zweiten `<head>` Block muss auch in den Abschnitt `playable-css` kopiert werden.

Ein funktionierendes Beispiel ist [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), das auf der Seite [Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element) eingebettet ist. Sie können dies verwenden, um zu sehen, wie die verschiedenen Teile korrekt hinzugefügt werden.

Wenn Sie das Repository geforkt haben und unsere CSS- und JavaScript-Dateien mit Ihrem Beispiel haben, sollte das Öffnen Ihres Live-Beispiels in einem Browser alles so anzeigen, wie es auf einer MDN-Seite erscheinen würde.

#### Nützliche Tipps

- Indentieren Sie den CSS- und HTML-Code innerhalb der Textbereiche nicht; richten Sie den Code mit dem Anfang der Zeilen aus. Dies sieht besser aus, wenn es gerendert wird.
- Wenn Bilder benötigt werden, legen Sie sie im Verzeichnis mit den Beispielen ab. Sie können gerne bereits vorhandene Bilder verwenden.
- Sie können die Höhe der Textbereiche anpassen, indem Sie die Höhe in den Inline-Stilen ändern.

### 3. Eine herunterladbare Version erstellen

Da die Beispiele unser gesamtes Live-Beispiel enthalten, möchten wir den Lesern nur den Code zur Verfügung stellen, den sie für ihr Beispiel benötigen, und unnötige Elemente weglassen. Erstellen Sie eine Kopie Ihres Live-Beispiels und fügen Sie `--download` zu dessen Namen hinzu. Zum Beispiel ist die Download-Version von `center.html` `center--download.html`. Diese Datei wird ähnlich wie Ihr ursprüngliches Beispiel sein. Es sollte eine grundlegende Version Ihres Musters als einzelne HTML-Seite sein.

Es kann hilfreich sein, die CSS-Regeln der enthaltenen Stylesheets im Datei-Body einzufügen. Siehe [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) als Leitfaden; diese Regeln werden als Ausgangspunkt bereitgestellt.

### 4. Einen Pull-Request mit Ihrem Beispiel öffnen

Öffnen Sie einen Pull-Request (PR) im [CSS Examples Repository](https://github.com/mdn/css-examples/pulls). Dies ermöglicht es uns, Ihnen bei etwaigen nötigen Änderungen am Beispiel zu helfen, bevor Sie Ihre Seite erstellen. Außerdem muss das Beispiel live sein, um aufgenommen zu werden. Deshalb ist es sinnvoll, zunächst die Code-Beispiele zu erstellen und dann den erklärenden Leitfaden. Erklären Sie in Ihrem PR das Muster und was Sie demonstrieren. Sehen Sie sich unsere [Leitlinien zum Öffnen eines Pull-Requests](/de/docs/MDN/Community/Pull_requests#open_a_pull_request) an.

### 5. Ihre Seite erstellen

Nachdem Ihr Beispiel-PR zusammengeführt wurde, öffnen Sie einen Pull-Request, um eine neue Seite im [Layout-Kochbuch-Verzeichnis](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook) zu erstellen.
Verwenden Sie unsere [Vorlage für Kochbuch-Seiten](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1).
Die Vorlage erklärt die Anforderungen jedes Abschnitts, und Sie können sich auf andere Kochbuch-Beispiele beziehen, um weitere Hilfe zu erhalten.

Denken Sie daran, einen Link zu Ihrem neuen Rezept auf der Hauptseite des [Layout-Kochbuchs](/de/docs/Web/CSS/Layout_cookbook) hinzuzufügen.

Wenn Sie Fragen haben oder möchten, dass jemand einen Blick auf Ihre Seite wirft, nehmen Sie Kontakt über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) auf.

## Siehe auch

- [Kochbuch-Seitenvorlage](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples Repository](https://github.com/mdn/css-examples)
