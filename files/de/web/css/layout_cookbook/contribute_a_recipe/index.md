---
title: Ein Rezept einreichen
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: 0ea79e9c21f720ad71d1a0e8a524e13bd7af6895
---

{{CSSRef}}

Wenn Sie ein Beispiel für das Layout Cookbook beisteuern möchten, erklärt diese Seite die Schritte, die erforderlich sind, um Ihr Beispiel zu veröffentlichen.

## Was macht ein gutes Rezept aus?

**Die einfachste mögliche Version eines nützlichen Webdesign-Musters**. Jede Zeile CSS, die Sie hinzufügen, sollte dazu dienen, das Muster zu demonstrieren, daher lassen Sie alles weg, was ausschließlich dazu dient, das Beispiel hübsch aussehen zu lassen. Die Idee ist, dass jemand das Muster übernehmen und es mit eigenen Stilen auf einer Website verwenden kann.

Ein Rezept besteht aus:

- Einem Live-Beispiel, das im [CSS Examples GitHub-Repository](https://github.com/mdn/css-examples) gespeichert ist.
- Einer herunterladbaren Version dieses Beispiels, ebenfalls im CSS Examples-Repository gespeichert.
- Einer Seite im Abschnitt [CSS layout cookbook](/de/docs/Web/CSS/Layout_cookbook) der Website, die folgende Komponenten enthalten sollte:

  1. Einführung
  2. Anforderungen
  3. Rezept
  4. Entscheidungen
  5. Nützliche Fallbacks oder alternative Methoden (falls relevant)
  6. Barrierefreiheit
  7. Browser-Kompatibilität (nur für nicht vollständig unterstützte CSS-Eigenschaften)
  8. Zusätzliche Ressourcen

## Schritte zum Veröffentlichen eines Rezepts

Um ein Rezept zu erstellen und dem CSS Layout Cookbook hinzuzufügen, folgen Sie diesen Schritten:

1. [Ein Muster erstellen](#1._ein_muster_erstellen)
2. [Ein Live-Beispiel erstellen](#2._ein_live-beispiel_erstellen)
3. [Eine herunterladbare Version erstellen](#3._eine_herunterladbare_version_erstellen)
4. [Einen Pull-Request öffnen](#4._einen_pull-request_mit_ihrem_beispiel_öffnen)
5. [Ihren Inhalt zu MDN hinzufügen](#5._ihre_seite_erstellen)

### 1. Ein Muster erstellen

Bevor Sie Ihr Beispiel in ein Rezept verwandeln, beginnen Sie, indem Sie Ihr Muster als einfache HTML-Seite erstellen. Überlegen Sie, was Sie demonstrieren möchten, und halten Sie es so einfach wie möglich. Verwenden Sie beschreibende Wörter wie "container" oder "item", wenn Sie Klassennamen hinzufügen.

Stellen Sie sicher, dass Sie das HTML und CSS in verschiedenen Browsern, Ansichtsgrößen und Geräten getestet haben. Achten Sie auch darauf, dass alle CSS-Stile den Barrierefreiheitsrichtlinien entsprechen. Es ist in Ordnung, CSS-Eigenschaften mit begrenzter Unterstützung zu verwenden, aber fügen Sie Informationen zur Browser-Unterstützung hinzu, wenn Sie die Seite erstellen, insbesondere im Abschnitt zur Browser-Kompatibilität. In einigen Fällen kann es hilfreich sein, eine zweite Version Ihres Beispiels mit Fallback-Unterstützung zu erstellen.

### 2. Ein Live-Beispiel erstellen

Die Live-Beispiele auf den Cookbook-Seiten, wie für das [Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element), und an anderen Stellen auf MDN ermöglichen es Lesern, mit dem Code zu spielen und relevante Teile zu ändern, ohne von all dem Code überwältigt zu werden. Ihr Rezept wird durch eines oder mehrere Beispiele demonstriert.

Forken Sie das [CSS Examples-Repo](https://github.com/mdn/css-examples) und schauen Sie dann in den Ordner `css-cookbook`. Es gibt eine Datei [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html). Kopieren Sie diese Datei und verwenden Sie sie als Ausgangspunkt. Speichern Sie dies im `css-cookbook`-Verzeichnis mit einem aussagekräftigen Namen für Ihr Muster. Die Vorlage enthält Kommentare, die Ihnen helfen, die verschiedenen Teile an den entsprechenden Stellen hinzuzufügen.

Die wichtigen Teile dieser Vorlage sind wie folgt:

- Es gibt ein Stylesheet für die Editorpanele mit ein paar grundlegenden Körperstilregeln und eine JavaScript-Datei für die Editorfunktionalität. Lassen Sie diese Dateien so, wie sie sind.

- Der `<head>` enthält zwei Stilblöcke. Der erste Stilblock ist für Elemente gedacht, die Leser nicht ändern müssen, um mit dem Beispiel zu spielen. Der zweite Stilblock enthält Elemente, die Leser möglicherweise ändern möchten. Wir fügen typischerweise all unser CSS in den ersten Block hinzu und entscheiden dann, welche Regeln wir in den zweiten Block verschieben. Die Regeln im zweiten Block sollten diejenigen sein, die grundlegend für das Muster sind, möglicherweise diejenigen, bei denen ein Leser einen CSS-Wert ändern und das Muster aktualisieren kann.

- Sie müssen das HTML für Ihre Komponente zweimal hinzufügen: zuerst im Abschnitt mit der Klasse `preview`, und dann in der `<textarea>` mit der Klasse `playable-html`.

- Das bearbeitbare CSS aus dem zweiten `<head>`-Block muss ebenfalls in den Abschnitt `playable-css` kopiert werden.

Ein einfaches funktionierendes Beispiel ist [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), das auf der Seite [Ein Element zentrieren](/de/docs/Web/CSS/Layout_cookbook/Center_an_element) eingebettet ist. Sie können dieses verwenden, um zu sehen, wie die verschiedenen Teile korrekt hinzugefügt werden.

Wenn Sie das Repository geforkt haben und unsere CSS- und JavaScript-Dateien mit Ihrem Beispiel haben, sollte das Öffnen Ihres Live-Beispiels in einem Browser alles so anzeigen, wie es auf einer MDN-Seite erscheinen würde.

#### Nützliche Tipps

- Indentieren Sie das CSS und HTML in den Textareas nicht; richten Sie stattdessen den Code mit dem Anfang der Zeilen aus. Dies sieht besser aus, wenn es gerendert wird.
- Wenn Bilder benötigt werden, legen Sie diese im Verzeichnis mit den Beispielen ab. Sie können gerne vorhandene Bilder verwenden.
- Sie können die Höhe der Textareas anpassen, indem Sie die Höhe in den Inline-Stilen ändern.

### 3. Eine herunterladbare Version erstellen

Da die Beispiele unseren gesamten Live-Beispiel-Code enthalten, möchten wir den Lesern nur den Code zur Verfügung stellen, den sie für ihr Beispiel benötigen, und unnötige Elemente weglassen. Erstellen Sie eine Kopie Ihres Live-Beispiels und fügen Sie `--download` an dessen Namen an. Zum Beispiel ist die Downloaddatei von `center.html` `center--download.html`. Diese Datei wird ähnlich wie Ihr ursprüngliches Beispiel sein. Es sollte eine grundlegende Version Ihres Musters als einzelne HTML-Seite sein.

Es kann sinnvoll sein, die Körper-CSS-Regeln aus unserem enthaltenen Stylesheet aufzunehmen. Schauen Sie sich [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) als Leitfaden an; diese Regeln sind als Ausgangspunkt vorgesehen.

### 4. Einen Pull-Request mit Ihrem Beispiel öffnen

Öffnen Sie einen Pull-Request (PR) im [CSS Examples-Repo](https://github.com/mdn/css-examples/pulls). Dadurch können wir Ihnen bei etwaigen Änderungen am Beispiel helfen, die vor dem Erstellen Ihrer Seite erforderlich sind. Außerdem muss das Beispiel live sein, um aufgenommen zu werden. Aus diesem Grund macht es Sinn, zuerst die Codebeispiele und dann den erklärenden Leitfaden zu erstellen. Erläutern Sie in Ihrem PR das Muster und was Sie demonstrieren. Siehe unsere [Richtlinien zum Öffnen eines Pull-Requests](/de/docs/MDN/Community/Pull_requests#open_a_pull_request).

### 5. Ihre Seite erstellen

Nachdem Ihr Beispiel-PR gemerged wurde, öffnen Sie einen Pull-Request, um eine neue Seite im [Layout Cookbook-Verzeichnis](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook) zu erstellen.
Verwenden Sie unsere [Vorlage für Cookboook-Seiten](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1).
Die Vorlage erklärt die Anforderungen jedes Abschnitts, und Sie können sich auf andere Cookbook-Beispiele beziehen, um weitere Hilfe zu erhalten.

Denken Sie daran, einen Link zu Ihrem neuen Rezept auf der Hauptseite des [Layout cookbook](/de/docs/Web/CSS/Layout_cookbook) hinzuzufügen.

Wenn Sie Fragen haben oder möchten, dass jemand Ihre Seite überprüft, kontaktieren Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels).

## Siehe auch

- [Vorlage für Cookbook-Seiten](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples-Repo](https://github.com/mdn/css-examples)
