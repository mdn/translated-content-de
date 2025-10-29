---
title: Ein Rezept beitragen
slug: Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Wenn Sie ein Beispiel für das Layout-Kochbuch beisteuern möchten, erklärt diese Seite die Schritte, die erforderlich sind, um Ihr Beispiel zu veröffentlichen.

## Was macht ein gutes Rezept aus?

**Die einfachstmögliche Version eines nützlichen Webdesign-Musters**. Jede Zeile CSS, die Sie einfügen, sollte dazu dienen, das Muster zu demonstrieren, sodass alles, was nur dazu dient, das Beispiel hübsch aussehen zu lassen, weggelassen werden sollte. Die Idee ist, dass jemand das Muster nehmen und es mit dem eigenen Stil in eine Website einfügen kann.

Ein Rezept besteht aus:

- Einem Live-Beispiel, das im [CSS Examples GitHub-Repository](https://github.com/mdn/css-examples) gespeichert ist.
- Einer herunterladbaren Version dieses Beispiels, die ebenfalls im CSS Examples Repository gespeichert ist.
- Einer Seite im [CSS Layout-Kochbuch](/de/docs/Web/CSS/How_to/Layout_cookbook) Abschnitt der Website, die die folgenden Komponenten enthalten sollte:
  1. Einführung
  2. Anforderungen
  3. Rezept
  4. Entscheidungen
  5. Nützliche Fallbacks oder alternative Methoden (wenn relevant)
  6. Barrierefreiheitshinweise
  7. Browser-Kompatibilität (nur für CSS-Eigenschaften, die nicht vollständig unterstützt werden)
  8. Zusätzliche Ressourcen

## Schritte zur Veröffentlichung eines Rezepts

Um ein Rezept zu erstellen und es dem CSS Layout-Kochbuch hinzuzufügen, folgen Sie diesen Schritten:

- [Was macht ein gutes Rezept aus?](#was-macht-ein-gutes-rezept-aus)
- [Schritte zur Veröffentlichung eines Rezepts](#schritte-zur-veröffentlichung-eines-rezepts)
  - [1. Entwickeln Sie ein Muster](#1-develop-a-pattern)
  - [2. Erstellen Sie ein Live-Beispiel](#2-erstellen-sie-ein-live-beispiel)
    - [Nützliche Tipps](#nützliche-tipps)
  - [3. Erstellen Sie eine herunterladbare Version](#3-erstellen-sie-eine-herunterladbare-version)
  - [4. Öffnen Sie einen Pull-Request mit Ihrem Beispiel](#4-öffnen-sie-einen-pull-request-mit-ihrem-beispiel)
  - [5. Erstellen Sie Ihre Seite](#5-erstellen-sie-ihre-seite)
- [Siehe auch](#siehe-auch)

### 1. Entwickeln Sie ein Muster

Bevor Sie Ihr Beispiel in ein Rezept verwandeln, beginnen Sie damit, Ihr Muster als einfache HTML-Seite zu erstellen. Überlegen Sie, was Sie demonstrieren möchten, und halten Sie es so einfach wie möglich. Verwenden Sie beschreibende Wörter wie „container“ oder „item“, wenn Sie Klassennamen hinzufügen.

Stellen Sie sicher, dass Sie das HTML und CSS in mehreren Browsern, Viewport-Größen und Geräten getestet haben. Stellen Sie auch sicher, dass alle CSS-Stilrichtungen den Barrierefreiheitsrichtlinien folgen. Es ist in Ordnung, CSS-Eigenschaften mit begrenzter Unterstützung zu verwenden, aber stellen Sie sicher, dass Sie Informationen zur Browser-Unterstützung angeben, wenn Sie die Seite erstellen, insbesondere im Abschnitt zur Browser-Kompatibilität. In einigen Fällen kann es hilfreich sein, eine zweite Version Ihres Beispiels mit Fallback-Unterstützung zu erstellen.

### 2. Erstellen Sie ein Live-Beispiel

Die Live-Beispiele auf Kochbuchseiten, wie zum Beispiel zum [Zentrieren eines Elements](/de/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element), und anderswo auf MDN ermöglichen es Lesern, mit dem Code zu spielen und relevante Teile zu ändern, ohne von dem gesamten Code überwältigt zu werden. Ihr Rezept wird durch ein oder mehrere Beispiele demonstriert.

Forken Sie das [CSS Examples Repository](https://github.com/mdn/css-examples) und schauen Sie dann in den Ordner `css-cookbook`. Dort finden Sie eine Datei namens [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html). Kopieren Sie diese Datei und verwenden Sie sie als Ausgangspunkt. Speichern Sie sie im `css-cookbook`-Verzeichnis mit einem Namen, der für Ihr Muster sinnvoll ist. Die Vorlage enthält Kommentare, die Ihnen beim Hinzufügen der verschiedenen Teile an den richtigen Stellen helfen.

Die wichtigen Teile dieser Vorlage sind wie folgt:

- Es gibt ein Stylesheet für die Editor-Panels mit einigen grundlegenden Körper-Stilen und eine JavaScript-Datei für die Editor-Funktionalität. Lassen Sie diese Dateien unverändert.

- Der `<head>` enthält zwei Stilblöcke. Der erste Stilblock ist für Elemente, die die Leser nicht ändern müssen, um mit dem Beispiel zu spielen. Der zweite Stilblock enthält Elemente, mit denen die Leser spielen könnten. Wir fügen normalerweise unser gesamtes CSS in den ersten Block ein und wählen dann die Regeln aus, die in den zweiten Block verschoben werden sollen. Die Regeln im zweiten Block sollten diejenigen sein, die grundlegend für das Muster sind, möglicherweise solche, bei denen ein Leser einen CSS-Wert ändern und sehen kann, wie sich das Muster aktualisiert.

- Sie müssen das HTML für Ihre Komponente zweimal hinzufügen: zuerst innerhalb des Abschnitts mit der Klasse `preview` und dann innerhalb der `<textarea>` mit der Klasse `playable-html`.

- Das bearbeitbare CSS aus dem zweiten `<head>`-Block muss auch in den `playable-css`-Abschnitt kopiert werden.

Ein funktionierendes Beispiel ist [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), das auf der Seite [Element zentrieren](/de/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element) eingebettet ist. Sie können dies verwenden, um zu sehen, wie die verschiedenen Teile korrekt hinzugefügt werden.

Wenn Sie das Repository geforkt haben und unsere CSS- und JavaScript-Dateien mit Ihrem Beispiel vorhanden sind, sollte das Öffnen Ihres Live-Beispiels in einem Browser alles genauso anzeigen, wie es auf einer MDN-Seite erscheinen würde.

#### Nützliche Tipps

- Richten Sie das CSS und HTML in den Textbereichen nicht ein; richten Sie den Code stattdessen mit dem Anfang der Zeilen aus. Dies sieht besser aus, wenn es gerendert wird.
- Wenn Bilder erforderlich sind, legen Sie sie im Verzeichnis mit den Beispielen ab. Sie können gerne bereits vorhandene Bilder verwenden.
- Sie können die Höhe der Textbereiche anpassen, indem Sie die Höhe in den Inline-Stilen ändern.

### 3. Erstellen Sie eine herunterladbare Version

Da die Beispiele unseren gesamten Live-Beispielcode enthalten, möchten wir den Lesern nur den Code zur Verfügung stellen, den sie für ihr Beispiel benötigen, und unnötige Elemente weglassen. Erstellen Sie eine Kopie Ihres Live-Beispiels und fügen Sie `--download` zu dessen Namen hinzu. Zum Beispiel ist die Download-Version von `center.html` `center--download.html`. Diese Datei sollte eine grundlegende Version Ihres Musters als einzelne HTML-Seite sein.

Es kann nützlich sein, die CSS-Regeln für den `<body>`-Bereich aus unserem eingebundenen Stylesheet aufzunehmen. Schauen Sie sich [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) als Leitfaden an; diese Regeln sind als Ausgangspunkt bereitgestellt.

### 4. Öffnen Sie einen Pull-Request mit Ihrem Beispiel

Öffnen Sie einen Pull-Request (PR) im [CSS Examples Repository](https://github.com/mdn/css-examples/pulls). Dies ermöglicht es uns, Ihnen bei eventuell notwendigen Änderungen am Beispiel zu helfen, bevor Sie Ihre Seite erstellen. Außerdem muss das Beispiel live sein, um aufgenommen zu werden. Aus diesem Grund ist es sinnvoll, zuerst die Codebeispiele und dann den erläuternden Leitfaden zu erstellen. Erklären Sie in Ihrem PR das Muster und was Sie demonstrieren. Siehe unsere [Richtlinien für das Öffnen eines Pull-Requests](/de/docs/MDN/Community/Pull_requests#open_a_pull_request).

### 5. Erstellen Sie Ihre Seite

Nachdem Ihr Beispiel-PR gemerged wurde, öffnen Sie einen Pull-Request, um eine neue Seite im [Layout-Kochbuch-Verzeichnis](https://github.com/mdn/content/tree/main/files/en-us/web/css/how_to/layout_cookbook) zu erstellen.
Verwenden Sie unsere [Vorlage für Kochbuchseiten](https://github.com/mdn/content/blob/main/files/en-us/web/css/how_to/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1).
Die Vorlage erklärt die Anforderungen jedes Abschnitts, und Sie können sich für weitere Hilfe auf andere Kochbuch-Beispiele beziehen.

Denken Sie daran, einen Link zu Ihrem neuen Rezept auf der Hauptseite des [Layout-Kochbuchs](/de/docs/Web/CSS/How_to/Layout_cookbook) hinzuzufügen.

Wenn Sie Fragen haben oder möchten, dass jemand Ihre Seite überprüft, wenden Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns.

## Siehe auch

- [Kochbuchseiten-Vorlage](/de/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples Repository](https://github.com/mdn/css-examples)
