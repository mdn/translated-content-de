---
title: Einen Beitrag für ein Rezept leisten
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: 0ea79e9c21f720ad71d1a0e8a524e13bd7af6895
---

{{CSSRef}}

Wenn Sie ein Beispiel für das Layout-Kochbuch beitragen möchten, erklärt diese Seite die Schritte, die Sie unternehmen müssen, um Ihr Beispiel zu veröffentlichen.

## Was macht ein gutes Rezept aus?

**Die einfachstmögliche Version eines nützlichen Webdesign-Musters**. Jede Zeile CSS, die Sie einfügen, sollte dazu dienen, das Muster zu demonstrieren. Lassen Sie alles weg, was nur dazu dient, das Beispiel hübsch aussehen zu lassen. Die Idee ist, dass jemand das Muster übernehmen und es mit seinen eigenen Styles in einer Website verwenden kann.

Ein Rezept besteht aus:

- Einem Live-Beispiel, das im [CSS Examples GitHub-Repository](https://github.com/mdn/css-examples) gespeichert ist.
- Einer herunterladbaren Version dieses Beispiels, ebenfalls im CSS Examples-Repository gespeichert.
- Einer Seite im Abschnitt [CSS Layout Kochbuch](/de/docs/Web/CSS/Layout_cookbook) der Website, die folgende Komponenten enthalten sollte:

  1. Einführung
  2. Anforderungen
  3. Rezept
  4. Entscheidungen
  5. Nützliche Fallbacks oder alternative Methoden (falls relevant)
  6. Barrierefreiheit
  7. Browser-Kompatibilität (nur für CSS-Eigenschaften, die nicht vollständig unterstützt werden)
  8. Zusätzliche Ressourcen

## Schritte zur Veröffentlichung eines Rezepts

Um ein Rezept zu erstellen und zum CSS Layout-Kochbuch hinzuzufügen, folgen Sie diesen Schritten:

1. [Ein Muster erstellen](#1._ein_muster_erstellen)
2. [Ein Live-Beispiel erstellen](#2._ein_live-beispiel_erstellen)
3. [Eine herunterladbare Version erstellen](#3._eine_herunterladbare_version_erstellen)
4. [Pull-Request öffnen](#4._pull-request_mit_ihrem_beispiel_öffnen)
5. [Inhalte zu MDN hinzufügen](#5._ihre_seite_erstellen)

### 1. Ein Muster erstellen

Bevor Sie Ihr Beispiel in ein Rezept umwandeln, beginnen Sie damit, Ihr Muster als einfache HTML-Seite zu erstellen. Überlegen Sie, was Sie demonstrieren möchten, und halten Sie es so einfach wie möglich. Verwenden Sie beschreibende Wörter wie "container" oder "item", wenn Sie Klassennamen hinzufügen.

Stellen Sie sicher, dass Sie das HTML und CSS in mehreren Browsern, bei unterschiedlichen Ansichtsgrößen und auf verschiedenen Geräten getestet haben. Stellen Sie außerdem sicher, dass alle CSS-Styling den Barrierefreiheit-Richtlinien entsprechen. Während es in Ordnung ist, CSS-Eigenschaften mit begrenztem Support zu verwenden, sollten Sie sicherstellen, dass Sie bei der Erstellung der Seite Informationen zur Browserunterstützung angeben, insbesondere im Abschnitt zur Browser-Kompatibilität. In einigen Fällen kann es hilfreich sein, eine zweite Version Ihres Beispiels mit Fallback-Support zu erstellen.

### 2. Ein Live-Beispiel erstellen

Die Live-Beispiele auf den Kochbuchseiten, wie zum Beispiel zum [Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element), ermöglichen es den Lesern, mit dem Code zu experimentieren und relevante Teile zu ändern, ohne von dem gesamten Code überwältigt zu werden. Ihr Rezept wird durch ein oder mehrere Beispiele veranschaulicht.

Forken Sie das [CSS Examples Repository](https://github.com/mdn/css-examples) und werfen Sie einen Blick in den `css-cookbook` Ordner. Dort befindet sich eine Datei namens [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html). Kopieren Sie diese Datei und verwenden Sie sie als Ausgangspunkt. Speichern Sie diese Datei im Verzeichnis `css-cookbook` mit einem für Ihr Muster sinnvollen Namen. Die Vorlage enthält Kommentare, die Sie bei der Hinzufügung der verschiedenen Teile an den entsprechenden Stellen führen.

Die wichtigen Teile dieser Vorlage sind wie folgt:

- Es gibt ein Stylesheet für die Editor-Panels mit einigen grundlegenden Body-Styling und eine JavaScript-Datei für die Editor-Funktionalität. Lassen Sie diese Dateien so, wie sie sind.

- Der `<head>` enthält zwei Style-Blöcke. Der erste Style-Block ist für Elemente, die die Leser nicht ändern müssen, um mit dem Beispiel zu arbeiten. Der zweite Style-Block enthält Elemente, die Leser bearbeiten möchten. Alle unsere CSS-Regeln fügen wir normalerweise dem ersten Block hinzu und wählen dann die Regeln aus, die in den zweiten Block verschoben werden sollen. Die Regeln im zweiten Block sollten diejenigen sein, die grundlegend für das Muster sind, möglicherweise solche, bei denen ein Leser einen CSS-Wert ändern und das Muster aktualisieren sehen kann.

- Der HTML-Code für Ihre Komponente muss zweimal hinzugefügt werden: einmal im Abschnitt mit der Klasse `preview` und dann innerhalb des `<textarea>` mit der Klasse `playable-html`.

- Das editierbare CSS aus dem zweiten `<head>`-Block muss ebenfalls in den `playable-css`-Abschnitt kopiert werden.

Ein einfaches funktionierendes Beispiel ist [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), das auf der Seite [Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element) eingebettet ist. Sie können dies nutzen, um zu sehen, wie Sie die verschiedenen Teile korrekt hinzufügen.

Wenn Sie das Repository geforkt haben und unsere CSS- und JavaScript-Dateien mit Ihrem Beispiel vorhanden sind, sollte das Öffnen Ihres Live-Beispiels in einem Browser alles genau so anzeigen, wie es auf einer MDN-Seite aussieht.

#### Nützliche Tipps

- Rücken Sie das CSS und HTML in den Textareas nicht ein; richten Sie den Code stattdessen mit dem Anfang der Zeilen aus. Dies sieht beim Rendern besser aus.
- Falls Bilder erforderlich sind, legen Sie sie im Verzeichnis mit den Beispielen ab. Sie dürfen gerne vorhandene Bilder verwenden.
- Sie können die Höhe der Textareas durch Änderung der Höhe in den Inline-Styles anpassen.

### 3. Eine herunterladbare Version erstellen

Da die Beispiele all unseren Live-Beispielcode enthalten, möchten wir den Lesern nur den Code zur Verfügung stellen, den sie für ihr Beispiel benötigen, und unnötige Elemente weglassen. Erstellen Sie eine Kopie Ihres Live-Beispiels und fügen Sie `--download` zu seinem Namen hinzu. Beispielsweise ist die Download-Version von `center.html` `center--download.html`. Diese Datei wird Ihrem anfänglichen Beispiel ähnlich sein. Sie sollte eine einfache Version Ihres Musters als einzelne HTML-Seite sein.

Es kann nützlich sein, die Body-CSS-Regeln aus unserem enthaltenen Stylesheet einzuschließen. Sehen Sie sich [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) als Leitfaden an; diese Regeln werden als Ausgangspunkt bereitgestellt.

### 4. Pull-Request mit Ihrem Beispiel öffnen

Öffnen Sie einen Pull-Request (PR) im [CSS Examples Repository](https://github.com/mdn/css-examples/pulls). Dadurch können wir Ihnen bei etwaigen Änderungen am Beispiel helfen, die möglicherweise erforderlich sind, bevor Sie Ihre Seite erstellen. Außerdem muss das Beispiel live sein, um einbezogen zu werden. Aus diesem Grund ist es sinnvoll, zuerst die Codebeispiele und dann das erläuternde Handbuch zu erstellen. Erklären Sie in Ihrem PR das Muster und was Sie demonstrieren. Sehen Sie sich unsere [Richtlinien zum Öffnen eines Pull-Requests](/de/docs/MDN/Community/Pull_requests#open_a_pull_request) an.

### 5. Ihre Seite erstellen

Nachdem Ihr Beispiel-PR zusammengeführt wurde, öffnen Sie einen weiteren Pull-Request, um eine neue Seite im [Layout-Kochbuchverzeichnis](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook) zu erstellen.
Verwenden Sie unsere [Vorlage für Kochbuch-Seiten](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1).
Die Vorlage erklärt die Anforderungen für jeden Abschnitt, und Sie können sich an anderen Kochbuch-Beispielen orientieren, um weitere Hilfe zu erhalten.

Denken Sie daran, einen Link zu Ihrem neuen Rezept auf der Hauptseite des [Layout-Kochbuchs](/de/docs/Web/CSS/Layout_cookbook) hinzuzufügen.

Wenn Sie Fragen haben oder möchten, dass jemand einen Blick auf Ihre Seite wirft, nehmen Sie über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns auf.

## Siehe auch

- [Vorlage für Kochbuch-Seiten](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples Repository](https://github.com/mdn/css-examples)
