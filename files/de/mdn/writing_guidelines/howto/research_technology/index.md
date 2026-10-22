---
title: Anleitung zur Recherche einer Technologie
short-title: Eine Technologie recherchieren
slug: MDN/Writing_guidelines/Howto/Research_technology
l10n:
  sourceCommit: c9c2a211595d962118504b599debbf39d6aaad3f
---

Dieser Artikel enthält hilfreiche Informationen dazu, wie Sie bei der Dokumentation von Technologien vorgehen können.

## Vorbereitung

Bevor Sie beginnen, etwas auf MDN Web Docs zu dokumentieren oder zu aktualisieren, sollten Sie einige Vorbereitungen treffen und Ihre Arbeit planen.

Dieser Leitfaden setzt voraus, dass Sie bereits über angemessene Kenntnisse in folgenden Bereichen verfügen:

- Webtechnologien wie HTML, CSS und JavaScript.
- Lesen von Spezifikationen für Webtechnologien. Bei der Dokumentation von APIs werden Sie häufig darauf zurückgreifen.

Alles Weitere können Sie sich während der Arbeit aneignen.

### Ressourcen sichten

Zu den nützlichen Ressourcen für das Verfassen von Dokumentation gehören:

1. Die [Anleitungen](/de/docs/MDN/Writing_guidelines/Howto) für MDN Web Docs: Sie befinden sich bereits hier, aber es lohnt sich, alle Artikel durchzusehen und sich mit unserem Schreibstil, den verschiedenen Seitentypen und ihren Abschnitten sowie den verschiedenen Möglichkeiten vertraut zu machen, Inhalte wie Spezifikationen und Angaben zur Browser-Kompatibilität einzubinden.
2. Die neueste Spezifikation: Verschiedene Standardisierungsgremien erstellen Spezifikationen für Technologien, die auf MDN Web Docs dokumentiert werden. Dazu gehören beispielsweise [TC39](https://tc39.es/) für JavaScript, die [WHATWG](https://whatwg.org/) für HTML und das [W3C](https://www.w3.org/) für CSS, XML und einige Web-APIs. Auf Referenzseiten von MDN Web Docs finden Sie Links zu den Spezifikationen im Abschnitt „Spezifikationen“. Alternativ können Sie in der Regel im Web danach suchen. Arbeiten Sie immer mit der neuesten, aktuellsten Spezifikation.
3. Die neuesten Versionen moderner Webbrowser: Verwenden Sie experimentelle Versionen oder Alpha-Versionen wie [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/#nightly), [Chrome Canary](https://www.google.com/intl/en/chrome/canary/) oder [Safari Technology Preview](https://webkit.org/downloads/). Diese unterstützen die Funktionen, die Sie dokumentieren, mit größerer Wahrscheinlichkeit. Das ist besonders wichtig, wenn Sie eine Funktion dokumentieren, die erst künftig verfügbar sein wird.
4. Demos, Blogbeiträge und andere Informationen: Sammeln Sie so viele Informationen wie möglich. Wenn Sie die Dokumentation einer Technologie aktualisieren, weil sich die Technologie geändert hat, achten Sie darauf, dass die verwendeten Quellen nicht veraltet sind. Deshalb sind die ersten beiden Punkte besonders wichtig.

> [!WARNING]
> Verlassen Sie sich bei der Recherche einer Technologie nicht auf Antworten von KI-Werkzeugen.
> Sie können erfundene oder veraltete Angaben, etwa zu Properties, Methoden oder zur Browserunterstützung, als Tatsachen darstellen.
> Gleichen Sie Angaben immer mit der Spezifikation ab und testen Sie sie in Browsern.

Es kann außerdem hilfreich sein, jemanden zu finden, der Ihre Fragen beantwortet. Das können die Autoren der Spezifikation oder die Entwickler sein, die Browserfunktionen implementieren.

### Spezifikationen lesen

Anfangs mag das ungewohnt sein, aber mit der Zeit werden Sie sich daran gewöhnen. Diese Links helfen Ihnen beim Einstieg:

- [W3C-Spezifikationen lesen](https://alistapart.com/article/readspec/) von J. David Eisenberg auf A List Apart
- [CSS-Spezifikationen verstehen](https://www.w3.org/Style/CSS/read) vom W3C
- [Webspezifikationen lesen, Teil I – oder: WebVR, wie funktionierst du?](https://surma.dev/things/reading-specs/) behandelt insbesondere das Lesen der WebVR-Spezifikation, ist aber auch eine hervorragende Einführung in das Lesen von Web-API-Spezifikationen.
- [Webspezifikationen lesen, Teil IIa – oder: ECMAScript Symbols](https://surma.dev/things/reading-specs-2/) ist die Fortsetzung des vorherigen Artikels und enthält Informationen zum Verständnis der ECMAScript-Spezifikation, die die Sprache JavaScript beschreibt.

Darüber hinaus gibt es unseren Leitfaden [Informationen in einer WebIDL-Datei](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file), der beim Lesen von Web-API-Spezifikationen sehr hilfreich sein kann.

## Die Funktion erkunden

Im Laufe der Dokumentation einer Technologie werden Sie immer wieder Codebeispiele schreiben oder Demos erstellen. Es ist jedoch sehr hilfreich, sich zunächst Zeit zu nehmen, um sich mit der Funktionsweise der Technologie vertraut zu machen. So entwickeln Sie ein gutes Verständnis für die Anwendungsfälle – also dafür, _warum_ Entwickler diese Technologie verwenden würden – und können gleichzeitig erste Codebeispiele erstellen.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde und beispielsweise eine Methode nun anders definiert ist, die bisherige Methode aber in Browsern weiterhin funktioniert, müssen Sie häufig beide an derselben Stelle dokumentieren, um sowohl die alte als auch die neue Methode abzudecken.
> Wenn Sie Hilfe benötigen, sehen Sie sich gefundene Demos an oder wenden Sie sich an einen Ansprechpartner aus der Entwicklung.

## Liste der zu schreibenden oder zu aktualisierenden Seiten erstellen

Welche Seiten Sie neu schreiben oder aktualisieren müssen, hängt von der Technologie ab, die Sie dokumentieren. Sehen Sie sich die [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) und den entsprechenden Abschnitt für die betreffende Technologie an. Wahrscheinlich müssen Sie auch bestehende Dokumentation aktualisieren. Suchen Sie daher auf MDN Web Docs nach Seiten, die mit Ihrem Thema zusammenhängen.

### Seitenleisten

Möglicherweise müssen Sie auch die Seitenleisten der Seiten, die Sie schreiben, definieren oder aktualisieren. Ob das erforderlich ist und wie Sie dabei vorgehen, erfahren Sie im [Leitfaden zu Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).

### Codebeispiele

Einige Codebeispiele für MDN Web Docs werden in separaten Repositorys verwaltet. Dazu gehören insbesondere die interaktiven Beispiele im Abschnitt „Ausprobieren“ der Referenzseiten sowie umfangreichere Demo-Codes für Leitfäden. Wenn Sie eines dieser Repositorys ergänzen oder ändern müssen, sollten Sie dies in Ihrer Liste vermerken.

Der Artikel [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) beschreibt die verschiedenen Arten von Codebeispielen, die wir auf MDN Web Docs verwenden.

### Beispiel

Angenommen, Sie dokumentieren eine neue Web-API. Ihre erste Liste der zu dokumentierenden Bereiche könnte so aussehen:

1. Übersichtsseite
2. Interface-Seiten
3. Constructor-Seiten
4. Methoden-Seiten
5. Property-Seiten
6. Event-Seiten
7. Konzept- und Leitfadenseiten
8. Codebeispiele
9. Seitenleisten

Anschließend können Sie die Liste erweitern und jedes Interface und seine Members einzeln aufführen. Wenn Sie beispielsweise die Web Audio API dokumentieren, könnte Ihre Liste eher so aussehen:

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

## Ein Issue erstellen

An diesem Punkt empfiehlt es sich, im Repository `mdn/content` ein [Issue](https://github.com/mdn/content/issues) zur Nachverfolgung zu erstellen und die Seiten darin als Aufgabenliste mit Kontrollkästchen aufzuführen. So können nicht nur Sie, sondern auch andere, die an der Dokumentation arbeiten, den Fortschritt öffentlich verfolgen. Sie können Ihre Pull Requests mit diesem Issue verknüpfen, um allen Beteiligten mehr Kontext zu geben.

## Seiten erstellen

Erstellen Sie nun die benötigten Seiten. Wie Sie eine neue Seite erstellen, erfahren Sie in unserem Leitfaden [Seiten erstellen, verschieben, löschen und bearbeiten](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting). In unserem Leitfaden zu [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) finden Sie möglicherweise nützliche Seitenvorlagen.
