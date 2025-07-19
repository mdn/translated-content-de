---
title: Anleitung zum Schreiben einer API-Referenz
short-title: Schreiben einer API-Referenz
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

Dieser Leitfaden führt Sie durch alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie mit der Dokumentation einer API beginnen, gibt es einige Dinge, die Sie vorbereiten und planen sollten, bevor Sie tatsächlich mit dem Schreiben beginnen.

### Erforderliche Vorkenntnisse

Es wird davon ausgegangen, dass Sie vor dem Lesen dieses Leitfadens über ausreichende Kenntnisse in folgenden Bereichen verfügen:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist am wichtigsten.
- Lesen von Webtechnologie-Spezifikationen. Sie werden sich diese oft ansehen, während Sie APIs dokumentieren.

Alles andere kann unterwegs gelernt werden.

### Erforderliche Ressourcen

Bevor Sie mit der Dokumentation einer API beginnen, sollten Sie Folgendes zur Verfügung haben:

1. Die neueste Spezifikation:
   Egal, ob es sich um eine W3C-Empfehlung oder einen frühen Entwurf handelt, Sie sollten sich auf den neuesten verfügbaren Entwurf der Spezifikation beziehen, die diese API abdeckt (oder Spezifikationen, die dies tun).
   Um sie zu finden, können Sie normalerweise eine Websuche durchführen. Die neueste Version wird oft von allen Versionen der Spezifikation aus verlinkt, unter "aktueller Entwurf" oder Ähnlichem.
2. Die neuesten modernen Webbrowser:
   Diese sollten experimentelle/Alpha-Builds sein, wie [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/en/chrome/canary/), die mit größerer Wahrscheinlichkeit die Funktionen unterstützen, die Sie dokumentieren.
   Dies ist besonders relevant, wenn Sie eine neu entstehende/geplante API dokumentieren.
3. Demos/Blog-Beiträge/andere Informationen: Finden Sie so viele Informationen wie möglich.
4. Nützliche technische Kontakte:
   Es ist wirklich nützlich, einen freundlichen technischen Kontakt zu finden, um Fragen zur Spezifikation zu stellen, jemand, der in die Standardisierung der API oder deren Umsetzung in einem Browser involviert ist.
   Gute Orte, um sie zu finden, sind:
   - Ihr internes Firmenadressbuch, wenn Sie für ein entsprechendes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, die an der Diskussion dieser API beteiligt ist, wie Mozillas [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Zum Beispiel listet die [Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/) die Autoren und ihre Kontaktdaten oben auf.

### Nehmen Sie sich Zeit zum Experimentieren mit der API

Sie werden im Verlauf der Dokumentation einer API häufig Demos erstellen, aber es ist nützlich, damit zu beginnen, sich mit der Funktionsweise der API vertraut zu machen — lernen Sie, was die Hauptschnittstellen/Eigenschaften/Methoden sind, was die primären Anwendungsfälle sind und wie man einfache Funktionalitäten damit schreibt.

Wenn sich eine API geändert hat, müssen Sie sorgfältig darauf achten, dass bestehende Demos, auf die Sie sich beziehen oder von denen Sie lernen, nicht veraltet sind. Überprüfen Sie die Hauptkonstrukte, die in der Demo verwendet werden, um zu sehen, ob sie mit der neuesten Spezifikation übereinstimmen. Sie funktionieren möglicherweise auch nicht in aktuellen Browsern, aber dies ist kein sehr zuverlässiger Test, da alte Funktionen oft weiterhin aus Kompatibilitätsgründen unterstützt werden.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde und z. B. eine Methode nun anders definiert ist, aber die alte Methode immer noch in Browsern funktioniert, müssen Sie oft beide an derselben Stelle dokumentieren, damit die alten und neuen Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf die gefundenen Demos oder fragen Sie einen technischen Kontakt.

### Erstellen Sie die Liste der Dokumente, die Sie schreiben oder aktualisieren müssen

Eine API-Referenz enthält in der Regel die folgenden Seiten.
Sie finden weitere Details dazu, was jede Seite enthält, Beispiele und Vorlagen in unserem Artikel [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types).
Bevor Sie beginnen, sollten Sie eine Liste aller Seiten erstellen, die Sie erstellen sollten.

1. Übersichtsseite
2. Schnittstellenseiten
3. Konstruktionsseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfaden-Seiten
8. Beispiele

> [!NOTE]
> In diesem Artikel werden wir uns auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) beziehen, um Beispiele zu veranschaulichen.

#### Übersichtsseiten

Eine einzelne API-Übersichtsseite wird verwendet, um die Rolle der API, ihre obersten Schnittstellen, damit verwandte Funktionen in anderen Schnittstellen und andere hochrangige Details zu beschreiben.
Ihr Name und Slug sollte der Name der API plus "API" am Ende sein. Sie wird auf der obersten Ebene der API-Referenz als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API) platziert.

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Schnittstellenseiten

Jede Schnittstelle hat auch ihre eigene Seite, die den Zweck der Schnittstelle beschreibt, die Mitglieder (Konstruktoren, Methoden, Eigenschaften usw.) auflistet, die sie enthält, und zeigt, mit welchen Browsern sie kompatibel ist.
Der Name und Slug einer Seite sollte der Name der Schnittstelle sein, genau wie in der Spezifikation geschrieben.
Jede Seite wird auf der obersten Ebene der API-Referenz als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API) platziert.

Beispiele:

- Titel: _AudioContext_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext](/de/docs/Web/API/AudioContext)

<!---->

- Titel: _AudioNode_
- Slug: _AudioNode_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioNode](/de/docs/Web/API/AudioNode)

> [!NOTE]
> Wir dokumentieren jedes Mitglied, das in der Schnittstelle erscheint. Sie sollten die folgenden Regeln beachten:

- Wir dokumentieren Methoden, die auf dem Prototyp eines Objekts definiert sind, das diese Schnittstelle implementiert (Instanzmethoden), und Methoden, die auf der tatsächlichen Klasse selbst definiert sind (statische Methoden).
  In den seltenen Fällen, in denen beide auf derselben Schnittstelle existieren, sollten Sie sie in getrennten Abschnitten auf der Seite auflisten (statische Methoden/Instanzmethoden).
  Normalerweise existieren nur Instanzmethoden, in diesem Fall können Sie diese unter dem Titel "Methoden" einfügen.
- Wir dokumentieren keine geerbten Eigenschaften und Methoden der Schnittstelle: Sie werden auf der jeweiligen Elternschnittstelle aufgelistet. Wir weisen jedoch auf ihre Existenz hin.
- Wir dokumentieren Eigenschaften und Methoden, die in Mixins definiert sind. Bitte sehen Sie sich den [Beitrag-Leitfaden für Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) für weitere Details an.
- Spezielle Methoden wie der Stringifier (`toString()`) und der Jsonifier (`toJSON()`) werden ebenfalls aufgelistet, falls sie existieren.
- Benannte Konstruktoren (wie `Image()` für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)) werden ebenfalls aufgeführt, falls relevant.

#### Konstruktionsseiten

Jede Schnittstelle hat null oder einen Konstruktor, der auf einer Unterseite der Schnittstellenseite dokumentiert ist. Sie beschreibt den Zweck des Konstruktors und zeigt, wie seine Syntax aussieht, Anwendungsbeispiele, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name des Konstruktors, der genau der gleiche wie der Name der Schnittstelle ist, und der Titel ist Schnittstellenname, Punkt, Konstruktionsname, dann Klammern am Ende.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Eigenschaftsseiten

Jede Schnittstelle hat null oder mehr Eigenschaften, die auf Unterseiten der Schnittstellenseite dokumentiert sind. Jede Seite beschreibt den Zweck der Eigenschaft und zeigt, wie ihre Syntax aussieht, Anwendungsbeispiele, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name der Eigenschaft, und der Titel ist Schnittstellenname, Punkt, dann Eigenschaftsname.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methodenseiten

Jede Schnittstelle hat null oder mehr Methoden, die auf Unterseiten der Schnittstellenseite dokumentiert sind. Jede Seite beschreibt den Zweck der Methode und zeigt, wie ihre Syntax aussieht, Anwendungsbeispiele, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name der Methode, und der Titel ist Schnittstellenname, Punkt, Methodenname, dann Klammern.

Beispiele:

- Titel: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/close](/de/docs/Web/API/AudioContext/close)

<!---->

- Titel: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/createGain](/de/docs/Web/API/BaseAudioContext/createGain)

#### Ereignisseiten

Dokumentieren Sie Ereignisse als Unterseiten ihrer Ziel-Schnittstellen und verwenden Sie den Slug _eventname_\_event mit dem Titel als `Interface: eventName event`.

Erstellen Sie keine Seiten für `on`-Ereignishandlereigenschaften. Erwähnen Sie beide Wege, um auf das Ereignis auf der `eventName_event`-Seite zuzugreifen.

Beispiel:

- Titel: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/de/docs/Web/XRSession/end_event](/de/docs/Web/API/XRSession/end_event)

#### Konzept-/Leitfaden-Seiten

Die meisten API-Referenzen haben mindestens einen Leitfaden und manchmal auch eine Konzeptseite, die dazu passt. Eine API-Referenz sollte mindestens einen Leitfaden enthalten, der "Using the _name-of-api_" genannt wird, und einen grundlegenden Leitfaden dazu bieten, wie die API verwendet wird. Komplexere APIs erfordern möglicherweise mehrere Anwendungsleitfäden, um zu erklären, wie verschiedene Aspekte der API verwendet werden.

Falls erforderlich, können Sie auch einen Konzeptartikel namens "_name-of-api_ concepts" einfügen, der die Theorie hinter allen Konzepten erklärt, die mit der API in Verbindung stehen und die Entwickler verstehen sollten, um sie effektiv zu nutzen.

Diese Artikel sollten alle als Unterseiten der API-Übersichtseite erstellt werden. Zum Beispiel hat die Web Audio API vier Leitfäden und einen Konzeptartikel:

- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Beispiele

Sie sollten einige Beispiele erstellen, die zumindest die häufigsten Anwendungsfälle der API veranschaulichen. Sie können diese überall einfügen, wo es angemessen ist, obwohl der empfohlene Ort das [MDN GitHub Repo](https://github.com/mdn/) ist.

#### Alle auflisten

Eine Liste aller dieser Unterseiten zu erstellen, ist eine gute Möglichkeit, sie zu verfolgen. Zum Beispiel:

- Web_Audio_API
- AudioContext
  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - …
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - …

- AudioNode
  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - …
  - AudioNode.connect(Param)
  - …

- AudioParam
- Ereignisse (Liste aktualisieren)
  - start
  - end
  - …

Jede Schnittstelle in der Liste hat eine separate Seite, die als Unterseite von `https://developer.mozilla.org/de/docs/Web/API` erstellt wird; zum Beispiel das Dokument für [`AudioContext`](/de/docs/Web/API/AudioContext) würde unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext` liegen. Jede [Schnittstellenseite](#schnittstellenseiten) erklärt, was diese Schnittstelle tut, und bietet eine Liste der Methoden und Eigenschaften, die die Schnittstelle ausmachen. Dann wird jede Methode und Eigenschaft auf ihrer eigenen Seite dokumentiert, die als Unterseite der Schnittstelle, deren Mitglied sie ist, erstellt wird. Beispielsweise wird [`BaseAudioContext/currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext/currentTime` dokumentiert.

## Erstellen Sie die Seiten

Erstellen Sie nun die benötigten Seiten nach den unten stehenden Strukturen. Unser [MDN-Inhalt README](https://github.com/mdn/content#adding-a-new-document) enthält Anweisungen zum Erstellen eines neuen Dokuments, und unser [Seitenarten-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) enthält weitere Beispiele und Vorlagen, die nützlich sein könnten.

### Struktur einer Übersichtsseite

API-Landingpages unterscheiden sich stark in der Länge, abhängig davon, wie groß die API ist, aber sie werden alle im Grunde die gleichen Merkmale haben. Siehe [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API) für ein Beispiel für eine große Landingpage.

Die Merkmale einer Landingpage sind unten aufgeführt:

1. **Beschreibung**: Der erste Absatz der Landingpage sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der API bieten.
2. **Abschnitt Konzepte und Nutzung**: Der nächste Abschnitt sollte "\[Name der API]-Konzepte und Nutzung" betitelt sein und einen Überblick über alle Hauptfunktionen bieten, die die API bereitstellt, welche Probleme sie löst und wie sie funktioniert — alles auf hoher Ebene. Dieser Abschnitt sollte ziemlich kurz sein und keinen Code oder spezifische Implementierungsdetails enthalten.
3. **Liste der Schnittstellen**: Dieser Abschnitt sollte "\[Name der API]-Schnittstellen" betitelt sein und Links zu den Referenzseiten für jede Schnittstelle bieten, die die API bildet, zusammen mit einer kurzen Beschreibung, was jede von ihnen tut. Siehe den Abschnitt "Referenzierung anderer API-Funktionen mit dem \\{{domxref}}-Makro" für einen schnelleren Weg, neue Seiten zu erstellen.
4. **Beispiele**: Dieser Abschnitt sollte einen oder zwei Anwendungsfälle für die API zeigen.
5. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für weitere Details.
6. **Browser-Kompatibilität**: Jetzt müssen Sie eine Tabelle zur Browser-Kompatibilität einfügen. Siehe [Kompatibilitäts-Tabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
7. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um weitere Links zu enthalten, die nützlich sein können, wenn Sie mehr über diese Technologie lernen, einschließlich MDN- (und externer) Tutorials, Beispiele, Bibliotheken usw.

### Struktur einer Schnittstellenseite

Jetzt sollten Sie bereit sein, mit dem Schreiben Ihrer Schnittstellenseiten zu beginnen. Jede Schnittstellenreferenzseite sollte die folgende Struktur haben:

1. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in der ersten Zeile jeder Schnittstellenseite ein, indem Sie den Namen der API als Argument angeben, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, einschließlich Eigenschaften und Methoden sowie anderer Schnelllinks, wie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird etwa wie im folgenden Screenshot aussehen.
   ![In diesem Screenshot wird ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle angezeigt, mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert werden](apiref-links.png)
2. **Feature-Status**: Ein [Banner, das den Funktionsstatus angibt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dafür müssen Sie [den Status im Browser-Kompatibilitätsdaten-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
3. **Beschreibung**: Der erste Absatz der Schnittstellenseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Schnittstelle bieten. Falls eine umfangreichere Beschreibung erforderlich ist, können Sie auch ein paar weitere Absätze hinzufügen. Wenn die Schnittstelle tatsächlich ein Wörterbuch ist, sollten Sie diesen Begriff anstelle von "Schnittstelle" verwenden.
4. **Vererbungsdiagramm:** Verwenden Sie das [`\{{InheritanceDiagram}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/inheritance_diagram.rs)-Makro, um ein SVG-Vererbungsdiagramm für die Schnittstelle einzubetten.
5. **Liste der Eigenschaften, Liste der Methoden**: Diese Abschnitte sollten "Eigenschaften" und "Methoden" betitelt sein und Links (unter Verwendung des \\{{domxref}}-Makros) zu einer Referenzseite für jede Eigenschaft/Methode dieser Schnittstelle bereitstellen, zusammen mit einer Beschreibung dessen, was jede von ihnen tut. Diese sollten unter Verwendung von [Beschreibung/Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) formatiert werden. Jede Beschreibung sollte kurz und prägnant sein — möglichst ein Satz. Siehe den Abschnitt "Referenzierung anderer API-Funktionen mit dem \\{{domxref}}-Makro" für einen schnelleren Weg, Links zu anderen Seiten zu erstellen.

   Am Anfang beider Abschnitte, vor Beginn der Liste der Eigenschaften/Methoden, geben Sie die Vererbung mit dem entsprechenden Satz an, in Kursivschrift:
   - _Diese Schnittstelle implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Eigenschaften von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Methoden von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Lesezeichen, die schreibgeschützt sind, sollten das \\{{ReadOnlyInline}}-Makro enthalten, das ein kleines "Read only"-Badge erstellt, das in der gleichen Zeile wie ihre \\{{domxref}}-Links enthalten ist (nach der Verwendung der \\{{experimental_inline}}, \\{{non-standard_Inline}} und \\{{deprecated_inline}}-Makros, falls einige davon benötigt werden).

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, die die typische Verwendung einer Hauptfunktion der API zeigt. Anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Ausschnitt davon auflisten. Für eine vollständige Codeauflistung können Sie sich auf ein [GitHub](https://github.com/)-Repo beziehen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)-Funktion erstellt wurde (sofern es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, können Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es im Page-Spielbar zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für weitere Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Tabelle zur Browser-Kompatibilität einfügen. Siehe [Kompatibilitäts-Tabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Polyfill**: Wenn angebracht, fügen Sie diesen Abschnitt ein und stellen Sie Code für ein Polyfill bereit, das es ermöglicht, die API auch in Browsern zu verwenden, die sie nicht implementieren. Wenn kein Polyfill existiert oder benötigt wird, lassen Sie diesen Abschnitt vollständig weg.
10. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um weitere Links zu enthalten, die nützlich sein können, wenn Sie mehr über diese Technologie lernen, einschließlich MDN- (und externer) Tutorials, Beispiele, Bibliotheken usw. Wir verfolgen eine liberale Politik für das Verlinken auf externe Quellen, aber achten Sie darauf:
    - Schließen Sie keine Seiten ein, die die gleichen Informationen wie eine andere Seite im MDN enthalten; verlinken Sie stattdessen auf diese Seite.
    - Geben Sie keine Autorennamen an - wir sind eine dokumentationsneutrale Dokumentationsseite. Verlinken Sie auf das Dokument; der Autorname wird dort angezeigt.
    - Achten Sie besonders auf Blogbeiträge: Sie neigen dazu, veraltet zu werden (alte Syntax, falsche Kompatibilitätsinformationen). Verlinken Sie auf sie nur, wenn sie einen klaren Mehrwert bieten, der in einem gepflegten Dokument nicht zu finden ist.
    - Verwenden Sie keine Handlungsverben wie "Siehe … für mehr Informationen" oder "Klicken Sie auf…", Sie wissen nicht, ob Ihr Leser in der Lage ist, auf den Link zu sehen oder zu klicken (zum Beispiel in einer Papierversion des Dokuments).

#### Schnittstellenseiten-Beispiele

Die folgenden sind beispielhafte Beispiele für Schnittstellenseiten:

- [`Request`](/de/docs/Web/API/Request) von der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) von der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Eigenschaftsseite

Erstellen Sie Ihre Eigenschaftsseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Eigenschaftsseite, um die Grundlage für Ihre neue Seite zu bilden.

Bearbeiten Sie den Eigenschaftsseitennamen, um dem `Interface.property_name`-Konventionsmuster zu folgen.

Eigenschaftsseiten müssen die folgenden Abschnitte haben:

1. **Titel**: Der Titel der Seite muss **InterfaceName.propertyName** sein. Der Schnittstellenname muss mit einem Großbuchstaben anfangen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert wird, fügen wir `.prototype.` nicht wie im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) ein.
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in der ersten Zeile jeder Eigenschaftsseite ein, indem Sie den Namen der API als Argument angeben, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, einschließlich Eigenschaften und Methoden sowie anderer Schnelllinks, wie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird etwa wie im folgenden Screenshot aussehen.
   ![In diesem Screenshot wird ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle angezeigt, mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert werden](apiref-links.png)
3. **Feature-Status**: Ein [Banner, das den Funktionsstatus angibt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dafür müssen Sie [den Status im Browser-Kompatibilitätsdaten-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Beschreibung**: Der erste Absatz der Eigenschaftsseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Eigenschaft bieten. Falls erforderlich, können Sie auch ein paar weitere Absätze hinzufügen. Offensichtliche zusätzliche Informationen, die aufgenommen werden können, sind der Standard-/anfangs-Wert und ob sie schreibgeschützt ist oder nicht. Der erste Satz sollte in der folgenden Struktur vorliegen:
   - Für schreibgeschützte Eigenschaften
     - : Die **`InterfaceName.property`** schreibgeschützte Eigenschaft gibt ein \\{{domxref("type")}} zurück, das…
   - Für andere Eigenschaften
     - : Die **`InterfaceName.property`** Eigenschaft ist ein \\{{domxref("type")}}, das…

   > [!NOTE]
   > `InterfaceName.property` sollte in `<code>` stehen und sollte zusätzlich das erste Mal, dass es verwendet wird, in fetter Schrift (`<strong>`) dargestellt werden.

5. **Wert**: Der Abschnitt "Wert" enthält eine Beschreibung des Werts der Eigenschaft. Diese sollte den Datentyp der Eigenschaft enthalten und was sie darstellt. Ein Beispiel finden Sie bei [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, die die typische Verwendung der betreffenden Eigenschaft zeigt. Sie sollten mit einem einfachen Beispiel beginnen, das zeigt, wie ein Objekt des Typs erstellt wird und wie auf die Eigenschaft zugegriffen wird. Komplexere Beispiele können nach einem solchen Beispiel hinzugefügt werden. In diesen zusätzlichen Beispielen sollte anstelle der gesamten Codeauflistung ein interessanter Ausschnitt angegeben werden. Für eine vollständige Codeauflistung können Sie sich auf ein [GitHub](https://github.com/)-Repo beziehen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages feature](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (sofern es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, können Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es live und spielbar zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für weitere Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Tabelle zur Browser-Kompatibilität einfügen. Siehe [Kompatibilitäts-Tabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um weitere Links zu enthalten, die nützlich sein können, wenn Sie diese Technologie verwenden: wie Methoden und Eigenschaften, die von einer Änderung dieser Eigenschaft betroffen sind oder Ereignisse, die in Bezug auf sie geworfen werden. Weitere Links, die nützlich sein können, wenn Sie mehr über diese Technologie lernen, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken, ... können hinzugefügt werden, obwohl es nützlich sein kann, in Betracht zu ziehen, sie stattdessen auf der Schnittstellenreferenzseite hinzuzufügen.

#### Eigenschaftsseiten-Beispiele

Die folgenden sind beispielhafte Beispiele für Eigenschaftsseiten:

- [`Request.method`](/de/docs/Web/API/Request/method) von der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) von der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Methodenseite

Erstellen Sie Ihre Methodenseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Methodenseite, um die Grundlage für Ihre neue Seite zu bilden.

Methodenseiten müssen die folgenden Abschnitte haben:

1. **Titel**: Der Titel der Seite muss **InterfaceName.method()** sein (mit den zwei abschließenden Klammern), aber der Slug (das Ende der Seiten-URL) darf die Klammern nicht enthalten. Auch der Schnittstellenname muss mit einem Großbuchstaben anfangen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert wird, fügen wir `.prototype.` im Titel nicht wie im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) ein.
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in der ersten Zeile jeder Methodenseite ein, indem Sie den Namen der API als Argument angeben, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, einschließlich Eigenschaften und Methoden sowie anderer Schnelllinks, wie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Makro definiert (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgeführt ist). Das Menü wird etwa wie im folgenden Screenshot aussehen.
   ![In diesem Screenshot wird ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle angezeigt, mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert werden](apiref-links.png)
3. **Feature-Status**: Ein [Banner, das den Funktionsstatus angibt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dafür müssen Sie [den Status im Browser-Kompatibilitätsdaten-Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Beschreibung**: Der erste Absatz der Methodenseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Methode bieten. Falls erforderlich, können Sie auch ein paar weitere Absätze hinzufügen. Offensichtliche zusätzliche Informationen, die aufgenommen werden können, sind die Standardwerte der Parameter, jede Theorie, auf die die Methode basiert, und was die Parameterwerte bewirken.
   - Der Anfang des ersten Satzes muss der folgenden Struktur folgen:
     - : Die **`InterfaceName.method()`**-Methodenschnittstelle …

   > [!NOTE]
   > `InterfaceName.method()` sollte in `<code>` stehen und sollte auch das erste Mal, dass es verwendet wird, in fetter Schrift (`<strong>`) dargestellt werden.

5. **Syntax**: Der Syntaxabschnitt sollte ein 2–3 Zeilen Beispiel enthalten — normalerweise nur die Konstruktion der Schnittstelle, dann der Aufruf der Schnittstellenmethode.
   - Die Syntax sollte die Form haben:
     - : method(param1, param2, …)

   Der Syntaxabschnitt sollte drei Unterabschnitte enthalten (siehe [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) als Beispiel):
   - "Parameter": Dies sollte eine Definitionsliste (oder eine unsortierte Liste) enthalten, die die verschiedenen Parameter der Methode benennt und beschreibt. Sie sollten das {{optional_inline}}-Makro neben dem Parameternamen verwenden, im Fall von optionalen Parametern. Wenn es keine Parameter gibt, sollte dieser Abschnitt weggelassen werden.
   - "Rückgabewert": Dies sollte angeben, welchen Rückgabewert die Methode hat, sei es ein einfacher Wert wie ein double oder boolescher Wert, oder ein komplexerer Wert wie ein anderes Schnittstellenobjekt, in diesem Fall können Sie das \\{{domxref}}-Makro verwenden, um auf die MDN-API-Seite zu verlinken, die diese Schnittstelle behandelt (falls vorhanden). Eine Methode könnte nichts zurückgeben, in diesem Fall sollte der Rückgabewert als "\\{{jsxref('undefined')}}" geschrieben werden (was in der gerenderten Seite so aussieht: {{jsxref("undefined")}}).
   - "Ausnahmen": Dies sollte die verschiedenen Ausnahmen auflisten, die beim Aufrufen der Methode ausgelöst werden können, und unter welchen Umständen sie auftreten. Wenn es keine Ausnahmen gibt, sollte dieser Abschnitt weggelassen werden.

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, die die typische Verwendung der betreffenden Methode zeigt. Anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Ausschnitt davon auflisten. Für eine vollständige Codeauflistung, sollten Sie sich auf ein [GitHub](https://github.com/)-Repo beziehen, das das vollständige Beispiel enthält und Sie könnten auch auf ein Live-Beispiel verlinken, das mit der [GitHub gh-pages feature](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (sofern es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, können Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Funktion verwenden, um es live und spielbar zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für weitere Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Tabelle zur Browser-Kompatibilität einfügen. Siehe [Kompatibilitäts-Tabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.

#### Methodenseiten-Beispiele

Die folgenden sind beispielhafte Beispiele für Methodenseiten:

- [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) von der [Web Animations API](/de/docs/Web/API/Web_Animations_API).
- [`fetch()`](/de/docs/Web/API/Window/fetch) von der [Fetch API](/de/docs/Web/API/Fetch_API).

## Seitenleisten

Sobald Sie Ihre API-Referenzseiten erstellt haben, möchten Sie die richtigen Seitenleisten auf ihnen einfügen, um die Seiten miteinander zu verbinden. Unser [Leitfaden zu API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) erklärt, wie das geht.
