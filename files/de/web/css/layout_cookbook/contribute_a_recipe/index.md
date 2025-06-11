---
title: Ein Rezept beitragen
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Wenn Sie ein Beispiel für das Layout Cookbook beisteuern möchten, erklärt diese Seite die Schritte, die Sie unternehmen müssen, um Ihr Beispiel zu veröffentlichen.

## Was macht ein gutes Rezept aus?

**Die einfachstmögliche Version eines nützlichen Webdesign-Musters.** Jede Zeile CSS, die Sie einfügen, sollte dazu dienen, das Muster zu demonstrieren, also lassen Sie alles weg, was nur dazu dient, das Beispiel hübsch aussehen zu lassen. Die Idee ist, dass jemand das Muster übernehmen und mit seinen eigenen Stilen in eine Website einfügen kann.

Ein Rezept besteht aus:

- Einem Live-Beispiel, das im [GitHub-Repo für CSS-Beispiele](https://github.com/mdn/css-examples) gespeichert ist.
- Einer herunterladbaren Version dieses Beispiels, ebenfalls im CSS-Beispiele-Repo gespeichert.
- Einer Seite im Abschnitt [CSS Layout Cookbook](/de/docs/Web/CSS/Layout_cookbook) der Website, die die folgenden Komponenten umfassen sollte:

  1. Einführung
  2. Anforderungen
  3. Rezept
  4. Entscheidungen
  5. Nützliche Fallbacks oder alternative Methoden (wenn relevant)
  6. Zugänglichkeit
  7. Browser-Kompatibilität (nur für CSS-Eigenschaften, die nicht vollständig unterstützt werden)
  8. Weitere Ressourcen

## Schritte zur Veröffentlichung eines Rezepts

Um ein Rezept zu erstellen und zum CSS Layout Cookbook hinzuzufügen, folgen Sie diesen Schritten:

- [Was macht ein gutes Rezept aus?](#was-macht-ein-gutes-rezept-aus)
- [Schritte zur Veröffentlichung eines Rezepts](#schritte-zur-veröffentlichung-eines-rezepts)
  - [1. Ein Muster erstellen](#1-ein-muster-erstellen)
  - [2. Ein Live-Beispiel erstellen](#2-ein-live-beispiel-erstellen)
    - [Nützliche Tipps](#nützliche-tipps)
  - [3. Eine herunterladbare Version erstellen](#3-eine-herunterladbare-version-erstellen)
  - [4. Einen Pull Request mit Ihrem Beispiel öffnen](#4-einen-pull-request-mit-ihrem-beispiel-öffnen)
  - [5. Ihre Seite erstellen](#5-ihre-seite-erstellen)
- [Siehe auch](#siehe-auch)

### 1. Ein Muster erstellen

Bevor Sie Ihr Beispiel in ein Rezept umwandeln, beginnen Sie damit, Ihr Muster als einfache HTML-Seite zu erstellen. Überlegen Sie, was Sie demonstrieren möchten, und halten Sie es so einfach wie möglich. Verwenden Sie beschreibende Begriffe wie "container" oder "item", wenn Sie Klassennamen hinzufügen.

Stellen Sie sicher, dass Sie das HTML und CSS in mehreren Browsern, bei verschiedenen Ansichtsgrößen und auf unterschiedlichen Geräten getestet haben. Achten Sie auch darauf, dass jegliche CSS-Stile den Zugänglichkeitsrichtlinien entsprechen. Auch wenn es in Ordnung ist, CSS-Eigenschaften mit eingeschränkter Unterstützung zu verwenden, stellen Sie sicher, dass Sie Informationen zur Browserunterstützung auf der Seite bereitstellen, insbesondere im Abschnitt zur Browser-Kompatibilität. In einigen Fällen kann es hilfreich sein, eine zweite Version Ihres Beispiels mit Fallback-Unterstützung zu erstellen.

### 2. Ein Live-Beispiel erstellen

Die Live-Beispiele auf den Cookbook-Seiten, wie zum Beispiel beim [Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element), und an anderen Stellen auf MDN ermöglichen es den Lesern, mit dem Code zu spielen und relevante Teile zu ändern, ohne von dem gesamten Code überwältigt zu werden. Ihr Rezept wird durch eines oder mehrere Beispiele demonstriert.

Forken Sie das [CSS-Beispiele-Repo](https://github.com/mdn/css-examples) und schauen Sie dann in den Ordner `css-cookbook`. Dort befindet sich eine Datei [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html). Kopieren Sie diese Datei und verwenden Sie sie als Ausgangspunkt. Speichern Sie diese im Verzeichnis `css-cookbook` mit einem Namen, der für Ihr Muster sinnvoll ist. Die Vorlage enthält Kommentare, die Sie beim Hinzufügen der verschiedenen Teile in die entsprechenden Bereiche anleiten.

Die wichtigen Teile dieser Vorlage sind wie folgt:

- Es gibt ein Stylesheet für die Editor-Panels mit grundlegenden Körperstilen und eine JavaScript-Datei für die Editor-Funktionalität. Lassen Sie diese Dateien wie sie sind.

- Der `<head>` enthält zwei Stilblöcke. Der erste Stilblock ist für Elemente, die Leser nicht ändern müssen, um mit dem Beispiel zu spielen. Der zweite Stilblock enthält Elemente, mit denen Leser spielen könnten. Wir fügen normalerweise unseren gesamten CSS in den ersten Block hinzu und wählen dann die Regeln aus, um sie in den zweiten Block zu verschieben. Die Regeln im zweiten Block sollten diejenigen sein, die grundlegend für das Muster sind, vielleicht diejenigen, bei denen ein Leser einen CSS-Wert ändern kann, um das Muster zu aktualisieren.

- Sie müssen das HTML für Ihre Komponente zweimal hinzufügen: zuerst im Abschnitt mit der Klasse `preview`, und dann im `<textarea>` mit der Klasse `playable-html`.

- Der bearbeitbare CSS aus dem zweiten `<head>` Block muss auch in den `playable-css` Abschnitt kopiert werden.

Ein funktionierendes Beispiel ist [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), das auf der Seite [Center an element](/de/docs/Web/CSS/Layout_cookbook/Center_an_element) eingebettet ist. Sie können dies verwenden, um zu sehen, wie Sie die verschiedenen Teile korrekt hinzufügen.

Wenn Sie das Repo geforkt haben und unsere CSS- und JavaScript-Dateien mit Ihrem Beispiel enthalten sind, sollte das Öffnen Ihres Live-Beispiels in einem Browser alles genauso anzeigen, wie es auf einer MDN-Seite erscheinen würde.

#### Nützliche Tipps

- Richten Sie das CSS und HTML in den Textbereichen nicht ein; richten Sie stattdessen den Code mit dem Anfang der Zeilen aus. Dies sieht besser aus, wenn es gerendert wird.
- Wenn Bilder benötigt werden, legen Sie sie im Verzeichnis mit den Beispielen ab. Sie können gerne bereits vorhandene Bilder verwenden.
- Sie können die Höhe der Textbereiche anpassen, indem Sie die Höhe in den Inline-Stilen ändern.

### 3. Eine herunterladbare Version erstellen

Da die Beispiele all unseren Live-Beispielcode beinhalten, möchten wir den Lesern nur den Code zur Verfügung stellen, den sie für ihr Beispiel benötigen, wobei wir unnötige Elemente weglassen. Erstellen Sie eine Kopie Ihres Live-Beispiels und fügen Sie `--download` zu seinem Namen hinzu. Zum Beispiel ist die Download-Version von `center.html` `center--download.html`. Diese Datei wird Ihrem ursprünglichen Beispiel ähneln. Es sollte sich um eine grundlegende Version Ihres Musters als einzelne HTML-Seite handeln.

Es kann hilfreich sein, die CSS-Regeln des Körpers aus unserem eingebundenen Stylesheet einzubeziehen. Schauen Sie sich [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) als Leitfaden an; diese Regeln werden als Ausgangspunkt bereitgestellt.

### 4. Einen Pull Request mit Ihrem Beispiel öffnen

Öffnen Sie einen Pull Request (PR) im [CSS-Beispiele-Repo](https://github.com/mdn/css-examples/pulls). Dies ermöglicht es uns, Ihnen bei etwaigen Änderungen am Beispiel, die erforderlich sein könnten, zu helfen, bevor Sie Ihre Seite erstellen. Außerdem muss das Beispiel live sein, um einbezogen zu werden. Deshalb ist es sinnvoll, zuerst die Codebeispiele zu erstellen und dann den erklärenden Leitfaden. Erklären Sie in Ihrem PR das Muster und was Sie demonstrieren. Lesen Sie unsere [Richtlinien zum Öffnen eines Pull Requests](/de/docs/MDN/Community/Pull_requests#open_a_pull_request).

### 5. Ihre Seite erstellen

Nachdem Ihr Beispiel-PR zusammengeführt wurde, öffnen Sie einen Pull Request, um eine neue Seite im [Layout Cookbook Verzeichnis](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook) zu erstellen. Verwenden Sie unsere [Vorlage für Cookbook-Seiten](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1). Die Vorlage erklärt die Anforderungen jedes Abschnitts, und Sie können sich auf andere Cookbook-Beispiele für weitere Hilfe beziehen.

Denken Sie daran, einen Link zu Ihrem neuen Rezept auf der Hauptseite des [Layout Cookbooks](/de/docs/Web/CSS/Layout_cookbook) hinzuzufügen.

Wenn Sie Fragen haben oder möchten, dass jemand Ihre Seite überprüft, nehmen Sie über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns auf.

## Siehe auch

- [Cookbook Seitenvorlage](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS-Beispiele-Repo](https://github.com/mdn/css-examples)
