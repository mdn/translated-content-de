---
title: Einen Leitfaden beisteuern
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Wenn Sie ein Beispiel für das Layout-Kochbuch beisteuern möchten, erklärt diese Seite die Schritte, um Ihr Beispiel zu veröffentlichen.

## Was macht einen guten Leitfaden aus?

**Die einfachste mögliche Version eines nützlichen Webdesign-Musters.** Jede Zeile von CSS, die Sie einfügen, sollte dazu dienen, das Muster zu demonstrieren. Lassen Sie alles weg, was nur dazu dient, das Beispiel hübsch aussehen zu lassen. Die Idee ist, dass jemand das Muster übernehmen und es mit eigenen Stilen auf einer Website verwenden kann.

Ein Leitfaden besteht aus:

- Einem Live-Beispiel, das im [CSS Examples GitHub-Repo](https://github.com/mdn/css-examples) gespeichert ist.
- Einer herunterladbaren Version dieses Beispiels, ebenfalls gespeichert im CSS Examples Repo.
- Einer Seite im [CSS Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) Abschnitt der Website, die folgende Komponenten enthalten sollte:

  1. Einleitung
  2. Anforderungen
  3. Rezept
  4. Entscheidungen
  5. Nützliche Fallbacks oder alternative Methoden (falls relevant)
  6. Barrierefreiheitsbedenken
  7. Browser-Kompatibilität (nur für CSS-Eigenschaften, die nicht vollständig unterstützt werden)
  8. Zusätzliche Ressourcen

## Schritte zur Veröffentlichung eines Leitfadens

Um einen Leitfaden zu erstellen und zum CSS Layout-Kochbuch hinzuzufügen, befolgen Sie diese Schritte:

1. [Ein Muster erstellen](#1._ein_muster_erstellen)
2. [Ein Live-Beispiel erstellen](#2._ein_live-beispiel_erstellen)
3. [Eine herunterladbare Version erstellen](#3._eine_herunterladbare_version_erstellen)
4. [Einen Pull Request öffnen](#4._einen_pull_request_mit_ihrem_beispiel_öffnen)
5. [Ihren Inhalt zu MDN hinzufügen](#5._ihre_seite_erstellen)

### 1. Ein Muster erstellen

Bevor Sie Ihr Beispiel in einen Leitfaden verwandeln, beginnen Sie damit, Ihr Muster als grundlegende HTML-Seite zu erstellen. Überlegen Sie, was Sie demonstrieren möchten, und halten Sie es so einfach wie möglich. Verwenden Sie beschreibende Wörter wie "container" oder "item", wenn Sie Klassennamen hinzufügen.

Stellen Sie sicher, dass Sie die HTML und CSS in mehreren Browsern, mit unterschiedlichen Fenstergrößen und Geräten getestet haben. Stellen Sie außerdem sicher, dass jegliche CSS-Stilisierung Barrierefreiheitsrichtlinien folgt. Es ist in Ordnung, CSS-Eigenschaften mit eingeschränkter Unterstützung zu verwenden, achten Sie jedoch darauf, Browser-Support-Informationen hinzuzufügen, wenn Sie die Seite erstellen, insbesondere im Abschnitt zur Browser-Kompatibilität. In einigen Fällen kann es hilfreich sein, eine zweite Version Ihres Beispiels mit Fallback-Unterstützung zu erstellen.

### 2. Ein Live-Beispiel erstellen

Die Live-Beispiele auf Kochbuchseiten, wie zum Beispiel für [Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element), und anderswo auf MDN ermöglichen es den Lesern, mit dem Code zu spielen und relevante Teile zu ändern, ohne von dem gesamten Code überwältigt zu werden. Ihr Leitfaden wird durch ein oder mehrere Beispiele veranschaulicht.

Forken Sie das [CSS Examples Repo](https://github.com/mdn/css-examples) und sehen Sie im `css-cookbook` Ordner nach. Es gibt eine [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html) Datei. Kopieren Sie diese Datei und verwenden Sie sie als Ausgangspunkt. Speichern Sie dies im `css-cookbook` Verzeichnis mit einem für Ihr Muster sinnvollen Namen. Die Vorlage enthält Kommentare, die Sie bei der Hinzufügung der verschiedenen Teile an den entsprechenden Stellen leiten.

Die wichtigen Teile dieser Vorlage sind:

- Es gibt ein Stylesheet für die Editor-Panels mit einigen grundlegenden Body-Stilisierungen und eine JavaScript-Datei für die Editor-Funktionalität. Lassen Sie diese Dateien so, wie sie sind.

- Der `<head>` enthält zwei Stilblöcke. Der erste Stilblock ist für Elemente, die Leser nicht ändern müssen, um mit dem Beispiel zu spielen. Der zweite Stilblock enthält Elemente, die Leser möglicherweise ändern möchten. Wir fügen normalerweise alle unsere CSS-Regeln zum ersten Block hinzu und wählen dann die Regeln aus, die wir in den zweiten Block verschieben wollen. Die Regeln im zweiten Block sollten diejenigen sein, die grundlegend für das Muster sind, vielleicht diejenigen, bei denen ein Leser einen CSS-Wert ändern kann und das Muster eine Aktualisierung zeigt.

- Sie müssen das HTML für Ihre Komponente zweimal hinzufügen: zuerst im Abschnitt mit der Klasse `preview` und dann im `<textarea>` mit der Klasse `playable-html`.

- Das bearbeitbare CSS aus dem zweiten `<head>` Block muss ebenfalls in den `playable-css` Abschnitt kopiert werden.

Ein funktionierendes Beispiel ist [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), das auf der Seite [Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element) eingebettet ist. Sie können dies verwenden, um zu sehen, wie Sie die verschiedenen Teile korrekt hinzufügen.

Wenn Sie das Repo geforkt haben und unsere CSS- und JavaScript-Dateien mit Ihrem Beispiel haben, sollte das Öffnen Ihres Live-Beispiels in einem Browser alles so anzeigen, wie es auf einer MDN-Seite erscheint.

#### Nützliche Tipps

- Richten Sie das CSS und HTML innerhalb der Textbereiche an den Zeilenanfängen aus, anstatt Einrückungen zu verwenden; es sieht besser aus, wenn es dargestellt wird.
- Wenn Bilder benötigt werden, legen Sie sie im Verzeichnis mit den Beispielen ab. Sie dürfen gerne vorhandene Bilder verwenden.
- Sie können die Höhe der Textbereiche anpassen, indem Sie die Höhe der Inline-Stile ändern.

### 3. Eine herunterladbare Version erstellen

Da die Beispiele unseren gesamten Live-Beispielcode beinhalten, möchten wir den Lesern nur den Code zur Verfügung stellen, den sie für ihr Beispiel benötigen, ohne überflüssige Elemente. Erstellen Sie eine Kopie Ihres Live-Beispiels und fügen Sie `--download` zu dessen Namen hinzu. Beispiel: Die Download-Version von `center.html` ist `center--download.html`. Diese Datei wird Ihrem ursprünglichen Beispiel ähneln. Sie sollte eine grundlegende Version Ihres Musters als einzelne HTML-Seite sein.

Es kann hilfreich sein, die CSS-Regeln des Body aus unserem enthaltenen Stylesheet einzufügen. Schauen Sie sich [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) als Leitfaden an; diese Regeln werden als Ausgangspunkt bereitgestellt.

### 4. Einen Pull Request mit Ihrem Beispiel öffnen

Öffnen Sie einen Pull Request (PR) im [CSS Examples Repo](https://github.com/mdn/css-examples/pulls). Dies ermöglicht es uns, Ihnen bei eventuellen notwendigen Änderungen am Beispiel zu helfen, bevor Sie Ihre Seite erstellen. Außerdem muss das Beispiel live sein, um eingefügt zu werden. Deshalb macht es Sinn, zuerst die Codebeispiele zu erstellen und dann den erläuternden Leitfaden zu verfassen. Erklären Sie in Ihrem PR das Muster und was Sie demonstrieren. Sehen Sie sich unsere [Richtlinien zum Eröffnen eines Pull Requests](/de/docs/MDN/Community/Pull_requests#open_a_pull_request) an.

### 5. Ihre Seite erstellen

Nachdem Ihr Beispiel-PR gemergt wurde, öffnen Sie einen Pull Request, um eine neue Seite im [Layout-Kochbuch-Verzeichnis](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook) zu erstellen.
Verwenden Sie unsere [Vorlage für Kochbuchseiten](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1).
Die Vorlage erklärt die Anforderungen jeder Sektion, und Sie können sich für weitere Hilfe auf andere Kochbuch-Beispiele beziehen.

Denken Sie daran, auf der Hauptseite des [Layout-Kochbuchs](/de/docs/Web/CSS/Layout_cookbook) einen Link zu Ihrem neuen Leitfaden hinzuzufügen.

Wenn Sie Fragen haben oder möchten, dass jemand einen Blick auf Ihre Seite wirft, kontaktieren Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels).

## Siehe auch

- [Kochbuch-Seitenvorlage](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples Repo](https://github.com/mdn/css-examples)
