---
title: Einen Beitrag zu einem Rezept leisten
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: 0ea79e9c21f720ad71d1a0e8a524e13bd7af6895
---

{{CSSRef}}

Wenn Sie ein Beispiel für das Layout-Kochbuch beitragen möchten, erklärt diese Seite die Schritte, die Sie unternehmen müssen, um Ihr Beispiel zu veröffentlichen.

## Was macht ein gutes Rezept aus?

**Die einfachstmögliche Version eines nützlichen Webdesign-Musters**. Jede CSS-Zeile, die Sie einfügen, sollte dazu dienen, das Muster zu demonstrieren, und alles, was nur dazu dient, das Beispiel hübsch aussehen zu lassen, sollten Sie weglassen. Die Idee ist, dass jemand das Muster übernehmen und es mit eigenen Stilen in einer Website verwenden kann.

Ein Rezept besteht aus:

- Einem Live-Beispiel, das im [CSS Examples GitHub-Repo](https://github.com/mdn/css-examples) gespeichert ist.
- Einer herunterladbaren Version dieses Beispiels, ebenfalls im CSS Examples-Repo gespeichert.
- Einer Seite im [CSS Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook)-Bereich der Site, die folgende Komponenten enthalten sollte:

  1. Einleitung
  2. Anforderungen
  3. Rezept
  4. Entscheidungen
  5. Nützliche Fallbacks oder alternative Methoden (falls relevant)
  6. Barrierefreiheitsthemen
  7. Browser-Kompatibilität (nur für CSS-Eigenschaften, die nicht vollständig unterstützt werden)
  8. Zusätzliche Ressourcen

## Schritte zur Veröffentlichung eines Rezepts

Um ein Rezept zu erstellen und zum CSS Layout-Kochbuch hinzuzufügen, befolgen Sie diese Schritte:

1. [Ein Muster erstellen](#1._ein_muster_erstellen)
2. [Ein Live-Beispiel erstellen](#2._ein_live-beispiel_erstellen)
3. [Eine herunterladbare Version erstellen](#3._eine_herunterladbare_version_erstellen)
4. [Eine Pull-Request öffnen](#4._eine_pull-request_mit_ihrem_beispiel_öffnen)
5. [Ihren Inhalt zu MDN hinzufügen](#5._ihre_seite_erstellen)

### 1. Ein Muster erstellen

Bevor Sie Ihr Beispiel in ein Rezept verwandeln, beginnen Sie mit der Erstellung Ihres Musters als einfache HTML-Seite. Überlegen Sie, was Sie demonstrieren möchten, und halten Sie es so einfach wie möglich. Verwenden Sie beschreibende Begriffe wie "container" oder "item", wenn Sie Klassennamen hinzufügen.

Stellen Sie sicher, dass Sie das HTML und CSS in mehreren Browsern, Ansichtsfenstergrößen und Geräten getestet haben. Stellen Sie außerdem sicher, dass alle CSS-Stile den Barrierefreiheitsrichtlinien folgen. Es ist in Ordnung, CSS-Eigenschaften mit begrenzter Unterstützung zu verwenden, aber stellen Sie sicher, dass Sie die Browserunterstützungsinformationen bei der Erstellung der Seite hinzufügen, insbesondere im Abschnitt zur Browser-Kompatibilität. In einigen Fällen kann es hilfreich sein, eine zweite Version Ihres Beispiels mit Fallback-Unterstützung zu erstellen.

### 2. Ein Live-Beispiel erstellen

Die Live-Beispiele auf den Kochbuchseiten, wie zum Beispiel für [das Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element) und anderswo auf MDN, ermöglichen es den Lesern, mit dem Code zu experimentieren und relevante Teile zu ändern, ohne von all dem Code überwältigt zu werden. Ihr Rezept wird durch ein oder mehr Beispiele demonstriert.

Gabeln Sie das [CSS Examples-Repo](https://github.com/mdn/css-examples) und sehen Sie sich den Ordner `css-cookbook` an. Es gibt eine Datei namens [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html). Kopieren Sie diese Datei und verwenden Sie sie als Ausgangspunkt. Speichern Sie sie im `css-cookbook`-Verzeichnis mit einem Namen, der zu Ihrem Muster passt. Die Vorlage enthält Kommentare, um Ihnen bei der Hinzufügung der verschiedenen Teile an den entsprechenden Stellen zu helfen.

Die wichtigen Teile dieser Vorlage sind wie folgt:

- Es gibt ein Stylesheet für die Editor-Panels mit einigen grundlegenden Body-Stilen und eine JavaScript-Datei für die Editor-Funktionalität. Lassen Sie diese Dateien, wie sie sind.

- Der `<head>` enthält zwei Stilblöcke. Der erste Stilblock ist für Elemente, die die Leser nicht ändern müssen, um mit dem Beispiel zu experimentieren. Der zweite Stilblock enthält Elemente, die die Leser möglicherweise ändern möchten. Normalerweise fügen wir den gesamten CSS-Code in den ersten Block ein und wählen dann die Regeln aus, die in den zweiten Block verschoben werden. Die Regeln im zweiten Block sollten diejenigen sein, die grundlegend für das Muster sind, vielleicht solche, bei denen ein Leser einen CSS-Wert ändern kann, um das Muster zu aktualisieren.

- Sie müssen das HTML für Ihre Komponente zweimal hinzufügen: zuerst innerhalb des Abschnitts mit der Klasse `preview`, und dann innerhalb der `<textarea>` mit der Klasse `playable-html`.

- Der bearbeitbare CSS-Code aus dem zweiten `<head>`-Block muss auch in den `playable-css`-Bereich kopiert werden.

Ein einfaches funktionierendes Beispiel ist [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), das auf der Seite [Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element) eingebettet ist. Sie können dies verwenden, um zu sehen, wie Sie die verschiedenen Teile korrekt hinzufügen.

Wenn Sie das Repo gegabelt haben und unsere CSS- und JavaScript-Dateien mit Ihrem Beispiel haben, sollte Ihr Live-Beispiel in einem Browser geöffnet genau so angezeigt werden, wie es auf einer MDN-Seite erscheint.

#### Nützliche Tipps

- Indentieren Sie den CSS- und HTML-Code in den Textareas nicht; richten Sie den Code stattdessen mit dem Beginn der Zeilen aus. Dies sieht besser aus, wenn es gerendert wird.
- Wenn Bilder benötigt werden, legen Sie sie im Verzeichnis mit den Beispielen ab. Sie können gerne bereits vorhandene Bilder verwenden.
- Sie können die Höhe der Textareas anpassen, indem Sie die Höhe in den Inline-Stilen ändern.

### 3. Eine herunterladbare Version erstellen

Da die Beispiele unseren gesamten Live-Beispielcode enthalten, möchten wir den Lesern nur den Code zur Verfügung stellen, den sie für ihr Beispiel benötigen, ohne unnötige Elemente. Erstellen Sie eine Kopie Ihres Live-Beispiels und fügen Sie `--download` zu seinem Namen hinzu. Zum Beispiel ist die Download-Version von `center.html` `center--download.html`. Diese Datei wird eine grundlegende Version Ihres Musters als einzelne HTML-Seite sein.

Es kann hilfreich sein, die Body-CSS-Regeln unseres enthaltenen Stylesheets einzuschließen. Schauen Sie sich [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) als Leitfaden an; diese Regeln werden als Ausgangspunkt bereitgestellt.

### 4. Eine Pull-Request mit Ihrem Beispiel öffnen

Öffnen Sie eine Pull-Request (PR) auf dem [CSS Examples-Repo](https://github.com/mdn/css-examples/pulls). Dies ermöglicht es uns, Ihnen bei notwendigen Änderungen am Beispiel zu helfen, bevor Sie Ihre Seite erstellen. Außerdem muss das Beispiel live sein, um einbezogen zu werden. Aus diesem Grund macht es Sinn, zuerst die Codebeispiele zu erstellen und dann den erläuternden Leitfaden. Erklären Sie in Ihrer PR das Muster und was Sie demonstrieren. Siehe unsere [Richtlinien zum Öffnen einer Pull-Request](/de/docs/MDN/Community/Pull_requests#open_a_pull_request).

### 5. Ihre Seite erstellen

Nachdem Ihre Beispiel-PR zusammengeführt wurde, öffnen Sie eine Pull-Request, um eine neue Seite im [Layout-Kochbuch-Verzeichnis](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook) zu erstellen.
Verwenden Sie unsere [Vorlage für Kochbuch-Seiten](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1).
Die Vorlage erklärt die Anforderungen jedes Abschnitts, und Sie können andere Kochbuchbeispiele zur weiteren Hilfe heranziehen.

Denken Sie daran, einen Link zu Ihrem neuen Rezept auf der Hauptseite des [Layout-Kochbuchs](/de/docs/Web/CSS/Layout_cookbook) hinzuzufügen.

Wenn Sie Fragen haben oder möchten, dass jemand Ihre Seite überprüft, wenden Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns.

## Siehe auch

- [Vorlage für Kochbuch-Seiten](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples-Repo](https://github.com/mdn/css-examples)
