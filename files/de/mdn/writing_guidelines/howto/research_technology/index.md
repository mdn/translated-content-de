---
title: Anleitung zur Recherche einer Technologie
short-title: Eine Technologie recherchieren
slug: MDN/Writing_guidelines/Howto/Research_technology
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

Dieser Artikel enthält praktische Hinweise dazu, wie Sie bei der Dokumentation von Technologien vorgehen können.

## Vorbereitungen treffen

Bevor Sie beginnen, etwas auf MDN Web Docs zu dokumentieren oder zu aktualisieren, sollten Sie einige Dinge vorbereiten und planen.

Dieser Leitfaden setzt voraus, dass Sie bereits über angemessene Kenntnisse in folgenden Bereichen verfügen:

- Webtechnologien wie HTML, CSS und JavaScript.
- Lesen von Spezifikationen für Webtechnologien. Bei der Dokumentation von APIs werden Sie häufig darauf zurückgreifen.

Alles Weitere können Sie sich im Laufe der Arbeit aneignen.

### Ressourcen sichten

Zu den hilfreichen Ressourcen für das Verfassen von Dokumentation gehören:

1. Die [Anleitungen](/de/docs/MDN/Writing_guidelines/Howto) für MDN Web Docs: Sie befinden sich bereits hier. Es lohnt sich dennoch, alle Artikel durchzusehen und sich mit unserem Schreibstil, den verschiedenen Seitentypen und ihren Abschnitten sowie den Möglichkeiten vertraut zu machen, Inhalte wie Spezifikationen und Browser-Kompatibilität einzubinden.
2. Die neueste Spezifikation: Verschiedene Standardisierungsorganisationen erstellen Spezifikationen für Technologien, die auf MDN Web Docs dokumentiert werden. Dazu gehören beispielsweise [TC39](https://tc39.es/) für JavaScript, die [WHATWG](https://whatwg.org/) für HTML und das [W3C](https://www.w3.org/) für CSS, XML und einige Web-APIs. Referenzseiten auf MDN Web Docs enthalten Links zu Spezifikationen (siehe Abschnitt „Spezifikationen“). Alternativ können Sie meist im Web danach suchen. Verwenden Sie immer die neueste, aktuellste Spezifikation.
3. Die neuesten Versionen moderner Webbrowser: Dabei sollte es sich um experimentelle Versionen oder Alphaversionen wie [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), [Chrome Canary](https://www.google.com/intl/en/chrome/canary/) oder [Safari Technology Preview](https://webkit.org/downloads/) handeln. Diese unterstützen die Funktionen, die Sie dokumentieren, mit größerer Wahrscheinlichkeit. Das ist besonders wichtig, wenn Sie eine Funktion dokumentieren, deren Veröffentlichung noch bevorsteht.
4. Demos, Blogbeiträge und andere Informationen: Sammeln Sie so viele Informationen wie möglich. Wenn Sie die Dokumentation einer Technologie aktualisieren, weil sich diese geändert hat, achten Sie darauf, dass die Ressourcen, aus denen Sie lernen, nicht veraltet sind. Deshalb sind die ersten beiden Punkte besonders wichtig.

Es kann außerdem sinnvoll sein, jemanden zu finden, der Ihre Fragen beantwortet. Das können die Autoren der Spezifikation oder die Entwickler sein, die Browserfunktionen implementieren.

### Spezifikationen lesen

Anfangs mag das ungewohnt sein, aber je häufiger Sie es tun, desto vertrauter wird es Ihnen. Die folgenden Links helfen Ihnen beim Einstieg:

- [How to read W3C specs](https://alistapart.com/article/readspec/) von J. David Eisenberg auf A List Apart
- [Understanding the CSS specifications](https://www.w3.org/Style/CSS/read) vom W3C
- [How to read web specs part I – or: WebVR, how do you work?](https://surma.dev/things/reading-specs/) erläutert speziell das Lesen der WebVR-Spezifikation, bietet aber auch eine hervorragende Einführung in das Lesen von Web-API-Spezifikationen.
- [How to read web specs part IIa – or: ECMAScript Symbols](https://surma.dev/things/reading-specs-2/) ist der zweite Teil des vorherigen Artikels und enthält Informationen zum Verständnis der ECMAScript-Spezifikation, die die JavaScript-Sprache beschreibt.

Zusätzlich gibt es unseren Leitfaden [Informationen in einer WebIDL-Datei](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file), der beim Lesen von Web-API-Spezifikationen sehr hilfreich sein kann.

## Die Funktion erkunden

Im Laufe der Dokumentation einer Technologie werden Sie immer wieder Codebeispiele schreiben oder Demos erstellen. Es ist jedoch sehr hilfreich, sich zunächst Zeit zu nehmen, um sich mit der Funktionsweise der Technologie vertraut zu machen. Diese Übung ist besonders wertvoll, weil Sie dadurch besser verstehen, wofür die Technologie eingesetzt wird (_warum_ Entwickler sie verwenden würden), und gleichzeitig erste Codebeispiele erstellen können.

> [!NOTE]
> Wenn eine Spezifikation kürzlich aktualisiert wurde und beispielsweise eine Methode nun anders definiert ist, die alte Methode aber in Browsern noch funktioniert, müssen Sie häufig beide an derselben Stelle dokumentieren, damit sowohl die alte als auch die neue Methode abgedeckt sind.
> Falls Sie Hilfe benötigen, sehen Sie sich gefundene Demos an oder wenden Sie sich an einen Kontakt aus dem Entwicklungsteam.

## Eine Liste der zu erstellenden oder zu aktualisierenden Seiten anlegen

Welche Seiten Sie neu erstellen oder aktualisieren müssen, hängt von der Technologie ab, über die Sie schreiben. Sehen Sie sich die [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) und den entsprechenden Abschnitt für die Technologie an, die Sie dokumentieren. Wahrscheinlich müssen Sie auch bestehende Dokumentation aktualisieren. Suchen Sie daher auf MDN Web Docs nach Seiten, die mit Ihrem Thema zusammenhängen.

### Seitenleisten

Möglicherweise müssen auch die Seitenleisten der Seiten, die Sie schreiben, definiert oder aktualisiert werden. Ob das erforderlich ist und wie Sie dabei vorgehen, erfahren Sie im [Leitfaden zu Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).

### Codebeispiele

Einige Codebeispiele für MDN Web Docs werden in separaten Repositorys verwaltet. Dazu gehören insbesondere die interaktiven Beispiele im Abschnitt „Ausprobieren“ auf Referenzseiten sowie der umfangreichere Democode für Leitfäden. Wenn Sie eines dieser Repositorys ergänzen oder ändern müssen, sollten Sie das in Ihrer Liste vermerken.

Der Artikel [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) beschreibt die verschiedenen Arten von Codebeispielen, die wir auf MDN Web Docs verwenden.

### Beispiel

Angenommen, Sie dokumentieren eine neue Web-API. Ihre erste Liste der zu dokumentierenden Bereiche könnte etwa so aussehen:

1. Übersichtsseite
2. Seiten zu Interfaces
3. Seiten zu Constructors
4. Seiten zu Methods
5. Seiten zu Properties
6. Seiten zu Events
7. Seiten zu Konzepten und Leitfäden
8. Codebeispiele
9. Seitenleisten

Anschließend können Sie die Liste um weitere Details ergänzen, indem Sie jedes Interface und seine Member hinzufügen. Wenn Sie beispielsweise die Web Audio API dokumentieren, könnte Ihre Liste eher so aussehen:

- Web_Audio_API
- AudioContext
  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - ...
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - ...

- AudioNode
  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - ...
  - AudioNode.connect(Param)
  - ...

- AudioParam
- Events (Liste aktualisieren)
  - start
  - end
  - …

## Einen Issue erstellen

An diesem Punkt empfiehlt es sich, im Repository `mdn/content` einen [Issue](https://github.com/mdn/content/issues) zur Nachverfolgung zu erstellen und die Seiten darin als Aufgabenliste mit Kontrollkästchen aufzuführen. So können nicht nur Sie, sondern auch andere, die an der Dokumentation arbeiten, den Fortschritt öffentlich verfolgen. Sie können Ihre Pull Requests außerdem mit diesem Issue verknüpfen, um allen mehr Kontext zu geben.

## Die Seiten erstellen

Erstellen Sie nun die benötigten Seiten. Wie Sie eine neue Seite erstellen, erfahren Sie in unserem Leitfaden [Seiten erstellen, verschieben, löschen und bearbeiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting). In unserem Leitfaden zu [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) finden Sie möglicherweise hilfreiche Seitenvorlagen.
