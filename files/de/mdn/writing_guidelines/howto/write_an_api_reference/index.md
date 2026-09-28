---
title: Anleitung zum Schreiben einer API-Referenz
short-title: Eine API-Referenz schreiben
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: 7eefecdba3b25dde52437ebff7d60ed2dbbd82db
---

Dieser Leitfaden vermittelt Ihnen alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie mit der Dokumentation einer API beginnen, sollten Sie einige Dinge vorbereiten und planen.

### Erforderliche Vorkenntnisse

Dieser Leitfaden setzt voraus, dass Sie über angemessene Kenntnisse in folgenden Bereichen verfügen:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist dabei am wichtigsten.
- Lesen von Spezifikationen für Webtechnologien. Bei der Dokumentation von APIs werden Sie häufig darauf zurückgreifen.

Alles Weitere können Sie sich während der Arbeit aneignen.

### Benötigte Ressourcen

Bevor Sie mit der Dokumentation einer API beginnen, sollten Ihnen folgende Ressourcen zur Verfügung stehen:

1. Die neueste Spezifikation:
   Ob es sich um eine W3C-Empfehlung oder einen frühen Entwurf handelt: Ziehen Sie den neuesten verfügbaren Entwurf der Spezifikation oder Spezifikationen heran, die die API behandeln.
   Meist lässt er sich über eine Websuche finden. Die neueste Fassung ist häufig in allen Fassungen der Spezifikation verlinkt und als „latest draft“ oder ähnlich gekennzeichnet.
2. Die neuesten Versionen moderner Webbrowser:
   Verwenden Sie experimentelle Versionen oder Alpha-Versionen wie [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/) oder [Chrome Canary](https://www.google.com/intl/en/chrome/canary/), die die zu dokumentierenden Funktionen eher unterstützen.
   Das ist besonders wichtig, wenn Sie eine neue oder experimentelle API dokumentieren.
3. Demos, Blogbeiträge und weitere Informationen: Sammeln Sie so viele Informationen wie möglich.
4. Kontakte zu Fachleuten aus der Entwicklung:
   Es ist sehr hilfreich, eine Ansprechperson zu haben, der Sie Fragen zur Spezifikation stellen können und die an der Standardisierung der API oder ihrer Implementierung in einem Browser beteiligt ist.
   Geeignete Anlaufstellen sind:
   - Das interne Adressbuch Ihres Unternehmens, falls Sie für ein entsprechendes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, auf der die API diskutiert wird, etwa Mozillas [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Beispielsweise führt die [Spezifikation der Web Audio API](https://webaudio.github.io/web-audio-api/) am Anfang die Autorinnen und Autoren sowie deren Kontaktdaten auf.

### Nehmen Sie sich Zeit, die API auszuprobieren

Im Laufe der Dokumentation einer API werden Sie wiederholt Demos erstellen. Es lohnt sich jedoch, sich zunächst mit der Funktionsweise der API vertraut zu machen: Finden Sie heraus, welche Interfaces, Properties und Methoden die wichtigsten sind, was die primären Anwendungsfälle sind und wie Sie einfache Funktionen damit umsetzen.

Wenn eine API geändert wurde, achten Sie darauf, dass vorhandene Demos, auf die Sie zurückgreifen oder von denen Sie lernen, nicht veraltet sind. Prüfen Sie, ob die in der Demo verwendeten zentralen Konstrukte der neuesten Spezifikation entsprechen. Dass eine Demo in aktuellen Browsern funktioniert, ist dafür kein besonders zuverlässiger Test: Alte Funktionen werden aus Gründen der Abwärtskompatibilität oft weiterhin unterstützt.

> [!NOTE]
> Wenn eine Spezifikation kürzlich aktualisiert wurde und beispielsweise eine Methode nun anders definiert ist, die alte Methode aber in Browsern noch funktioniert, müssen Sie häufig beide Varianten an derselben Stelle dokumentieren.
> Wenn Sie Hilfe benötigen, ziehen Sie gefundene Demos zurate oder fragen Sie eine Ansprechperson aus der Entwicklung.

### Erstellen Sie eine Liste der Dokumente, die Sie schreiben oder aktualisieren müssen

Eine API-Referenz enthält üblicherweise die folgenden Seiten.
Weitere Informationen zu den Inhalten der einzelnen Seiten sowie Beispiele und Vorlagen finden Sie in unserem Artikel [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types).
Bevor Sie beginnen, sollten Sie alle Seiten auflisten, die Sie erstellen müssen.

1. Übersichtsseite
2. Interface-Seiten
3. Constructor-Seiten
4. Methodenseiten
5. Property-Seiten
6. Event-Seiten
7. Konzeptseiten und Leitfäden
8. Beispiele

> [!NOTE]
> In diesem Artikel verwenden wir die [Web Audio API](/de/docs/Web/API/Web_Audio_API) als Beispiel.

#### Übersichtsseiten

Eine einzelne API-Übersichtsseite beschreibt den Zweck der API, ihre wichtigsten Interfaces, zugehörige Funktionen in anderen Interfaces und weitere übergeordnete Aspekte.
Ihr Name und ihr Slug sollten aus dem Namen der API mit dem angehängten Wort „API“ bestehen. Sie befindet sich auf der obersten Ebene der API-Referenz, als Unterseite von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Interface-Seiten

Jedes Interface erhält eine eigene Seite. Diese beschreibt den Zweck des Interfaces, führt seine Bestandteile auf, etwa Constructors, Methoden und Properties, und zeigt, mit welchen Browsern es kompatibel ist.
Name und Slug einer solchen Seite sollten genau dem Namen des Interfaces in der Spezifikation entsprechen.
Jede Seite befindet sich auf der obersten Ebene der API-Referenz, als Unterseite von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiele:

- Titel: _AudioContext_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext](/de/docs/Web/API/AudioContext)

<!---->

- Titel: _AudioNode_
- Slug: _AudioNode_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioNode](/de/docs/Web/API/AudioNode)

> [!NOTE]
> Wir dokumentieren jeden Bestandteil eines Interfaces. Beachten Sie dabei die folgenden Regeln:

- Wir dokumentieren Methoden, die auf dem Prototyp eines Objekts definiert sind, das dieses Interface implementiert (Instanzmethoden), sowie Methoden, die direkt auf der Klasse selbst definiert sind (statische Methoden).
  Falls ausnahmsweise beide Arten im selben Interface vorkommen, sollten Sie sie auf der Seite in getrennten Abschnitten aufführen („Static methods“ und „Instance methods“).
  Üblicherweise gibt es nur Instanzmethoden. In diesem Fall können Sie sie unter der Überschrift „Methods“ aufführen.
- Wir dokumentieren keine geerbten Properties und Methoden des Interfaces: Sie werden beim jeweiligen übergeordneten Interface aufgeführt. Wir weisen jedoch auf ihre Existenz hin.
- Wir dokumentieren Properties und Methoden, die in Mixins definiert sind. Weitere Informationen finden Sie im [Leitfaden zum Beitragen zu Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins).
- Besondere Methoden wie der Stringifier (`toString()`) und der JSONifier (`toJSON()`) werden ebenfalls aufgeführt, sofern sie existieren.
- Benannte Constructors (wie `Image()` für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)) werden gegebenenfalls ebenfalls aufgeführt.

#### Constructor-Seiten

Jedes Interface hat keinen oder einen Constructor, der auf einer Unterseite der Interface-Seite dokumentiert wird. Sie beschreibt den Zweck des Constructors und zeigt unter anderem seine Syntax, Anwendungsbeispiele und Informationen zur Browser-Kompatibilität. Der Slug ist der Name des Constructors, der genau dem Namen des Interfaces entspricht. Der Titel besteht aus dem Interface-Namen, einem Punkt, dem Constructor-Namen und abschließenden Klammern.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Property-Seiten

Jedes Interface hat keine oder mehrere Properties, die auf Unterseiten der Interface-Seite dokumentiert werden. Jede Seite beschreibt den Zweck der Property und zeigt unter anderem ihre Syntax, Anwendungsbeispiele und Informationen zur Browser-Kompatibilität. Der Slug ist der Name der Property; der Titel besteht aus dem Interface-Namen, einem Punkt und dem Property-Namen.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methodenseiten

Jedes Interface hat keine oder mehrere Methoden, die auf Unterseiten der Interface-Seite dokumentiert werden. Jede Seite beschreibt den Zweck der Methode und zeigt unter anderem ihre Syntax, Anwendungsbeispiele und Informationen zur Browser-Kompatibilität. Der Slug ist der Name der Methode; der Titel besteht aus dem Interface-Namen, einem Punkt, dem Methodennamen und abschließenden Klammern.

Beispiele:

- Titel: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/close](/de/docs/Web/API/AudioContext/close)

<!---->

- Titel: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/createGain](/de/docs/Web/API/BaseAudioContext/createGain)

#### Event-Seiten

Dokumentieren Sie Events als Unterseiten ihrer Ziel-Interfaces. Verwenden Sie den Slug _eventname_\_event und setzen Sie den Titel auf `Interface: eventName event`.

Erstellen Sie keine Seiten für `on`-Event-Handler-Properties. Erwähnen Sie auf der Seite `eventName_event` beide Möglichkeiten, auf das Event zuzugreifen.

Beispiel:

- Titel: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/de/docs/Web/XRSession/end_event](/de/docs/Web/API/XRSession/end_event)

#### Konzeptseiten und Leitfäden

Die meisten API-Referenzen werden von mindestens einem Leitfaden und manchmal auch von einer Konzeptseite begleitet. Eine API-Referenz sollte zumindest einen Leitfaden mit dem Titel „Using the _name-of-api_“ enthalten, der eine grundlegende Einführung in die Verwendung der API bietet. Bei komplexeren APIs können mehrere Leitfäden erforderlich sein, um die Verwendung verschiedener Aspekte der API zu erklären.

Bei Bedarf können Sie auch einen Konzeptartikel mit dem Titel „_name-of-api_ concepts“ hinzufügen. Er erläutert die theoretischen Grundlagen der API, die Entwicklerinnen und Entwickler verstehen sollten, um sie effektiv einzusetzen.

Alle diese Artikel sollten als Unterseiten der API-Übersichtsseite erstellt werden. Die Web Audio API hat beispielsweise vier Leitfäden und einen Konzeptartikel:

- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Beispiele

Erstellen Sie einige Beispiele, die zumindest die häufigsten Anwendungsfälle der API demonstrieren. Sie können sie an einem beliebigen geeigneten Ort ablegen; empfohlen wird jedoch das [MDN-GitHub-Repository](https://github.com/mdn/).

#### Alle Seiten auflisten

Eine Liste all dieser Unterseiten hilft Ihnen, den Überblick zu behalten. Zum Beispiel:

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
- Events (Liste aktualisieren)
  - start
  - end
  - …

Für jedes Interface in der Liste wird eine eigene Seite als Unterseite von `https://developer.mozilla.org/de/docs/Web/API` erstellt. Beispielsweise befindet sich das Dokument für [`AudioContext`](/de/docs/Web/API/AudioContext) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext`. Jede [Interface-Seite](#interface-seiten) erklärt die Funktion des Interfaces und listet seine Methoden und Properties auf. Anschließend wird jede Methode und jede Property auf einer eigenen Seite dokumentiert, die als Unterseite des zugehörigen Interfaces erstellt wird. Beispielsweise ist [`BaseAudioContext/currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext/currentTime` dokumentiert.

## Erstellen Sie die Seiten

Erstellen Sie nun die benötigten Seiten gemäß den nachfolgend beschriebenen Strukturen. Die [README-Datei des MDN-Content-Repositories](https://github.com/mdn/content#adding-a-new-document) enthält Anweisungen zum Erstellen eines neuen Dokuments. Unser Leitfaden zu [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) enthält weitere Beispiele und Seitenvorlagen, die hilfreich sein können.

### Aufbau einer Übersichtsseite

API-Übersichtsseiten können je nach Umfang der API sehr unterschiedlich lang sein, haben aber im Wesentlichen dieselben Bestandteile. Ein Beispiel für eine umfangreiche Übersichtsseite finden Sie unter [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API).

Die Bestandteile einer Übersichtsseite sind:

1. **Beschreibung**: Der erste Absatz sollte den übergeordneten Zweck der API kurz und prägnant beschreiben.
2. **Abschnitt zu Konzepten und Verwendung**: Der nächste Abschnitt sollte den Titel „\[Name der API] concepts and usage“ tragen und auf übergeordneter Ebene erklären, welche wesentlichen Funktionen die API bereitstellt, welche Probleme sie löst und wie sie funktioniert. Dieser Abschnitt sollte recht kurz sein und weder Code noch konkrete Implementierungsdetails enthalten.
3. **Liste der Interfaces**: Dieser Abschnitt sollte den Titel „\[Name der API] interfaces“ tragen und Links zu den Referenzseiten aller Interfaces der API sowie jeweils eine kurze Beschreibung ihrer Funktion enthalten. Im Abschnitt „Andere API-Funktionen mit dem Makro \\{{domxref}} referenzieren“ wird ein schnellerer Weg zum Erstellen neuer Seiten beschrieben.
4. **Beispiele**: Dieser Abschnitt sollte ein oder zwei Anwendungsfälle der API zeigen.
5. **Spezifikationstabelle**: Fügen Sie hier eine Spezifikationstabelle ein. Weitere Informationen finden Sie im Abschnitt „Eine Tabelle mit Spezifikationsverweisen erstellen“.
6. **Browser-Kompatibilität**: Fügen Sie nun eine Tabelle zur Browser-Kompatibilität ein. Einzelheiten finden Sie unter [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
7. **Siehe auch**: Der Abschnitt „Siehe auch“ eignet sich für weiterführende Links, die beim Erlernen dieser Technologie hilfreich sein können, darunter Tutorials von MDN und anderen Quellen, Beispiele und Bibliotheken.

### Aufbau einer Interface-Seite

Nun können Sie mit dem Schreiben Ihrer Interface-Seiten beginnen. Jede Interface-Referenzseite sollte wie folgt aufgebaut sein:

1. **\\{{APIRef}}**: Fügen Sie das Makro \\{{APIRef}} in die erste Zeile jeder Interface-Seite ein und übergeben Sie den Namen der API als Argument, beispielsweise \\{{APIRef("Web Audio API")}}. Dieses Makro erzeugt links auf der Interface-Seite ein Referenzmenü mit Properties, Methoden und weiteren Schnelllinks, die im Makro [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert sind. Bitten Sie jemanden, Ihre API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen Eintrag anzulegen, falls sie dort noch nicht aufgeführt ist. Das Menü sieht ungefähr so aus wie im folgenden Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für das Interface OscillatorNode mit mehreren Unterlisten für Methoden und Properties, das vom Makro APIRef erzeugt wurde](apiref-links.png)
2. **Funktionsstatus**: Ein [Banner mit dem Status der Funktion](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners), etwa „veraltet“, „nicht standardisiert“ oder „experimentell“, wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie [den Status im Repository für Browser-Kompatibilitätsdaten aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
3. **Beschreibung**: Der erste Absatz der Interface-Seite sollte den übergeordneten Zweck des Interfaces kurz und prägnant beschreiben. Falls weitere Erläuterungen nötig sind, können Sie ein paar zusätzliche Absätze hinzufügen. Wenn es sich bei dem Interface tatsächlich um ein Dictionary handelt, sollten Sie diesen Begriff anstelle von „Interface“ verwenden.
4. **Vererbungsdiagramm:** Verwenden Sie das Makro [`\{{InheritanceDiagram}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/inheritance_diagram.rs), um ein SVG-Vererbungsdiagramm für das Interface einzubetten.
5. **Liste der Properties und Methoden**: Diese Abschnitte sollten „Properties“ und „Methods“ heißen und für jede Property beziehungsweise Methode des Interfaces einen Link zur Referenzseite (mit dem Makro \\{{domxref}}) sowie eine Beschreibung ihrer Funktion enthalten. Verwenden Sie dafür [Beschreibungs- beziehungsweise Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists). Jede Beschreibung sollte kurz und prägnant sein – möglichst nur ein Satz. Im Abschnitt „Andere API-Funktionen mit dem Makro \\{{domxref}} referenzieren“ wird ein schnellerer Weg zum Erstellen von Links zu anderen Seiten beschrieben.

   Weisen Sie am Anfang beider Abschnitte, vor der jeweiligen Liste, mit einem passenden kursiv gesetzten Satz auf die Vererbung hin:
   - _Dieses Interface implementiert keine eigenen Properties, erbt aber Properties von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Dieses Interface erbt außerdem Properties von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Dieses Interface implementiert keine eigenen Methoden, erbt aber Methoden von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Dieses Interface erbt außerdem Methoden von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Schreibgeschützte Properties sollten in derselben Zeile wie ihre \\{{domxref}}-Links das Makro \\{{ReadOnlyInline}} enthalten. Es erzeugt ein kleines „Read only“-Badge und sollte vor den Makros \\{{experimental_inline}}, \\{{non-standard_Inline}} und \\{{deprecated_inline}} stehen, falls diese benötigt werden.

6. **Beispiele**: Fügen Sie ein Codebeispiel ein, das die typische Verwendung einer wichtigen Funktion der API zeigt. Statt den GESAMTEN Code aufzuführen, sollten Sie einen interessanten Ausschnitt auswählen. Für den vollständigen Code können Sie auf ein [GitHub](https://github.com/)-Repository verweisen und gegebenenfalls eine mit [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellte Live-Demo verlinken, sofern diese ausschließlich clientseitigen Code verwendet. Wenn das Beispiel visuell ist, können Sie auch die MDN-Funktion [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) verwenden, damit es direkt auf der Seite ausprobiert werden kann.
7. **Spezifikationstabelle**: Fügen Sie hier eine Spezifikationstabelle ein. Weitere Informationen finden Sie im Abschnitt „Eine Tabelle mit Spezifikationsverweisen erstellen“.
8. **Browser-Kompatibilität**: Fügen Sie nun eine Tabelle zur Browser-Kompatibilität ein. Einzelheiten finden Sie unter [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
9. **Polyfill**: Falls sinnvoll, fügen Sie diesen Abschnitt mit Code für einen Polyfill hinzu, der die Verwendung der API auch in Browsern ermöglicht, die sie nicht implementieren. Falls kein Polyfill existiert oder benötigt wird, lassen Sie den Abschnitt vollständig weg.
10. **Siehe auch**: Dieser Abschnitt eignet sich für weiterführende Links, die beim Erlernen der Technologie hilfreich sein können, darunter Tutorials von MDN und anderen Quellen, Beispiele und Bibliotheken. Bei Links zu externen Quellen sind wir großzügig, beachten Sie jedoch Folgendes:
    - Verlinken Sie keine Seiten, die dieselben Informationen wie eine andere MDN-Seite enthalten; verlinken Sie stattdessen die MDN-Seite.
    - Nennen Sie keine Namen von Autorinnen und Autoren – unsere Dokumentation stellt nicht die Verfassenden in den Vordergrund. Verlinken Sie das Dokument; die Namen werden dort angezeigt.
    - Achten Sie besonders bei Blogbeiträgen darauf, ob sie veraltet sind, etwa wegen alter Syntax oder falscher Kompatibilitätsangaben. Verlinken Sie sie nur, wenn sie einen klaren Mehrwert bieten, der in einem gepflegten Dokument nicht zu finden ist.
    - Verwenden Sie keine Handlungsaufforderungen wie „Weitere Informationen finden Sie unter …“ oder „Klicken Sie auf …“. Sie wissen nicht, ob Ihre Leserinnen und Leser den Link sehen oder anklicken können, beispielsweise in einer gedruckten Fassung des Dokuments.

#### Beispiele für Interface-Seiten

Die folgenden Interface-Seiten sind gute Beispiele:

- [`Request`](/de/docs/Web/API/Request) aus der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) aus der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Aufbau einer Property-Seite

Erstellen Sie Property-Seiten als Unterseiten des Interfaces, auf dem die Properties implementiert sind. Verwenden Sie den Aufbau einer anderen Property-Seite als Grundlage für Ihre neue Seite.

Passen Sie den Namen der Property-Seite an die Konvention `Interface.property_name` an.

Property-Seiten müssen die folgenden Abschnitte enthalten:

1. **Titel**: Der Seitentitel muss **InterfaceName.propertyName** lauten. Der Interface-Name muss mit einem Großbuchstaben beginnen. Obwohl ein Interface in JavaScript auf dem Prototyp von Objekten implementiert ist, nehmen wir `.prototype.` nicht in den Titel auf, anders als in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).
2. **\\{{APIRef}}**: Fügen Sie das Makro \\{{APIRef}} in die erste Zeile jeder Property-Seite ein und übergeben Sie den Namen der API als Argument, beispielsweise \\{{APIRef("Web Audio API")}}. Dieses Makro erzeugt links auf der Interface-Seite ein Referenzmenü mit Properties, Methoden und weiteren Schnelllinks, die im Makro [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert sind. Bitten Sie jemanden, Ihre API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen Eintrag anzulegen, falls sie dort noch nicht aufgeführt ist. Das Menü sieht ungefähr so aus wie im folgenden Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für das Interface OscillatorNode mit mehreren Unterlisten für Methoden und Properties, das vom Makro APIRef erzeugt wurde](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner mit dem Status der Funktion](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners), etwa „veraltet“, „nicht standardisiert“ oder „experimentell“, wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie [den Status im Repository für Browser-Kompatibilitätsdaten aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Beschreibung**: Der erste Absatz der Property-Seite sollte ihren übergeordneten Zweck kurz und prägnant beschreiben. Falls weitere Erläuterungen nötig sind, können Sie ein paar zusätzliche Absätze hinzufügen. Sinnvolle zusätzliche Angaben sind ihr Standard- beziehungsweise Anfangswert und ob sie schreibgeschützt ist. Der erste Satz muss wie folgt aufgebaut sein:
   - Für schreibgeschützte Properties
     - : Die schreibgeschützte Property **`InterfaceName.property`** gibt ein \\{{domxref("type")}} zurück, das …
   - Für andere Properties
     - : Die Property **`InterfaceName.property`** ist ein \\{{domxref("type")}}, das …

   > [!NOTE]
   > `InterfaceName.property` sollte in `<code>` stehen und bei der ersten Erwähnung zusätzlich fett (`<strong>`) formatiert sein.

5. **Wert**: Der Abschnitt „Value“ beschreibt den Wert der Property. Er sollte den Datentyp der Property und die Bedeutung des Werts nennen. Ein Beispiel finden Sie unter [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars).

6. **Beispiele**: Fügen Sie ein Codebeispiel für die typische Verwendung der betreffenden Property ein. Beginnen Sie mit einem einfachen Beispiel, das zeigt, wie ein Objekt des entsprechenden Typs erstellt und auf die Property zugegriffen wird. Danach können Sie komplexere Beispiele ergänzen. Statt in diesen zusätzlichen Beispielen den GESAMTEN Code aufzuführen, sollten Sie einen interessanten Ausschnitt auswählen. Für den vollständigen Code können Sie auf ein [GitHub](https://github.com/)-Repository verweisen und gegebenenfalls eine mit [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellte Live-Demo verlinken, sofern diese ausschließlich clientseitigen Code verwendet. Wenn das Beispiel visuell ist, können Sie auch die MDN-Funktion [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) verwenden, damit es direkt auf der Seite ausprobiert werden kann.
7. **Spezifikationstabelle**: Fügen Sie hier eine Spezifikationstabelle ein. Weitere Informationen finden Sie im Abschnitt „Eine Tabelle mit Spezifikationsverweisen erstellen“.
8. **Browser-Kompatibilität**: Fügen Sie nun eine Tabelle zur Browser-Kompatibilität ein. Einzelheiten finden Sie unter [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
9. **Siehe auch**: Dieser Abschnitt eignet sich für weiterführende Links, die bei der Verwendung dieser Technologie hilfreich sein können, etwa zu Methoden und Properties, die von einer Änderung dieser Property betroffen sind, oder zu Events, die in diesem Zusammenhang ausgelöst werden. Sie können weitere Links hinzufügen, die beim Erlernen der Technologie helfen, darunter Tutorials von MDN und anderen Quellen, Beispiele und Bibliotheken. Überlegen Sie jedoch, ob diese Links besser auf der Interface-Referenzseite aufgehoben sind.

#### Beispiele für Property-Seiten

Die folgenden Property-Seiten sind gute Beispiele:

- [`Request.method`](/de/docs/Web/API/Request/method) aus der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) aus der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Aufbau einer Methodenseite

Erstellen Sie Methodenseiten als Unterseiten des Interfaces, auf dem die Methoden implementiert sind. Verwenden Sie den Aufbau einer anderen Methodenseite als Grundlage für Ihre neue Seite.

Methodenseiten benötigen die folgenden Abschnitte:

1. **Titel**: Der Seitentitel muss **InterfaceName.method()** lauten, einschließlich der abschließenden Klammern. Der Slug, also der letzte Teil der Seiten-URL, darf die Klammern hingegen nicht enthalten. Außerdem muss der Interface-Name mit einem Großbuchstaben beginnen. Obwohl ein Interface in JavaScript auf dem Prototyp von Objekten implementiert ist, nehmen wir `.prototype.` nicht in den Titel auf, anders als in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).
2. **\\{{APIRef}}**: Fügen Sie das Makro \\{{APIRef}} in die erste Zeile jeder Methodenseite ein und übergeben Sie den Namen der API als Argument, beispielsweise \\{{APIRef("Web Audio API")}}. Dieses Makro erzeugt links auf der Interface-Seite ein Referenzmenü mit Properties, Methoden und weiteren Schnelllinks, die im Makro [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert sind. Bitten Sie jemanden, Ihre API zu einem vorhandenen GroupData-Eintrag hinzuzufügen oder einen neuen Eintrag anzulegen, falls sie dort noch nicht aufgeführt ist. Das Menü sieht ungefähr so aus wie im folgenden Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für das Interface OscillatorNode mit mehreren Unterlisten für Methoden und Properties, das vom Makro APIRef erzeugt wurde](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner mit dem Status der Funktion](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners), etwa „veraltet“, „nicht standardisiert“ oder „experimentell“, wird bei Bedarf automatisch hinzugefügt. Dazu müssen Sie [den Status im Repository für Browser-Kompatibilitätsdaten aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Beschreibung**: Der erste Absatz der Methodenseite sollte den übergeordneten Zweck der Methode kurz und prägnant beschreiben. Falls weitere Erläuterungen nötig sind, können Sie ein paar zusätzliche Absätze hinzufügen. Sinnvolle zusätzliche Angaben sind die Standardwerte ihrer Parameter, die theoretischen Grundlagen der Methode und die Bedeutung der Parameterwerte.
   - Der erste Satz muss wie folgt beginnen:
     - : Die Methode **`InterfaceName.method()`** des Interfaces …

   > [!NOTE]
   > `InterfaceName.method()` sollte in `<code>` stehen und bei der ersten Erwähnung zusätzlich fett (`<strong>`) formatiert sein.

5. **Syntax**: Der Syntaxabschnitt sollte ein Beispiel mit zwei bis drei Zeilen enthalten – üblicherweise wird zunächst das Interface erstellt und dann seine Methode aufgerufen.
   - Die Syntax sollte folgende Form haben:
     - : method(param1, param2, …)

   Der Syntaxabschnitt sollte drei Unterabschnitte enthalten (ein Beispiel finden Sie unter [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign)):
   - „Parameters“: Dieser Abschnitt sollte eine Definitionsliste oder ungeordnete Liste enthalten, die die verschiedenen Parameter der Methode benennt und beschreibt. Bei optionalen Parametern sollten Sie neben dem Parameternamen das Makro {{optional_inline}} einfügen. Wenn es keine Parameter gibt, entfällt dieser Abschnitt.
   - „Return value“: Geben Sie hier an, welchen Wert die Methode zurückgibt. Das kann ein einfacher Wert wie eine Gleitkommazahl oder ein boolescher Wert sein oder ein komplexerer Wert wie ein anderes Interface-Objekt. In letzterem Fall können Sie mit dem Makro \\{{domxref}} auf die entsprechende MDN-API-Seite verlinken, sofern sie existiert. Eine Methode gibt möglicherweise nichts zurück. In diesem Fall sollte der Rückgabewert als „\\{{jsxref('undefined')}}“ angegeben werden (auf der gerenderten Seite sieht das so aus: {{jsxref("undefined")}}).
   - „Exceptions“: Führen Sie hier die verschiedenen Exceptions auf, die beim Aufruf der Methode ausgelöst werden können, und erläutern Sie die jeweiligen Umstände. Wenn es keine Exceptions gibt, entfällt dieser Abschnitt.

6. **Beispiele**: Fügen Sie ein Codebeispiel für die typische Verwendung der betreffenden Methode ein. Statt den GESAMTEN Code aufzuführen, sollten Sie einen interessanten Ausschnitt auswählen. Für den vollständigen Code sollten Sie auf ein [GitHub](https://github.com/)-Repository verweisen und gegebenenfalls eine mit [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellte Live-Demo verlinken, sofern diese ausschließlich clientseitigen Code verwendet. Wenn das Beispiel visuell ist, können Sie auch die MDN-Funktion [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) verwenden, damit es direkt auf der Seite ausprobiert werden kann.
7. **Spezifikationstabelle**: Fügen Sie hier eine Spezifikationstabelle ein. Weitere Informationen finden Sie im Abschnitt „Eine Tabelle mit Spezifikationsverweisen erstellen“.
8. **Browser-Kompatibilität**: Fügen Sie nun eine Tabelle zur Browser-Kompatibilität ein. Einzelheiten finden Sie unter [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).

#### Beispiele für Methodenseiten

Die folgenden Methodenseiten sind gute Beispiele:

- [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) aus der [Web Animations API](/de/docs/Web/API/Web_Animations_API).
- [`fetch()`](/de/docs/Web/API/Window/fetch) aus der [Fetch API](/de/docs/Web/API/Fetch_API).

## Seitenleisten

Nachdem Sie Ihre API-Referenzseiten erstellt haben, sollten Sie die passenden Seitenleisten einfügen, um die Seiten miteinander zu verknüpfen. Unser Leitfaden zu [Seitenleisten für API-Referenzen](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) erklärt, wie das geht.
