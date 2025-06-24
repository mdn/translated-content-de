---
title: Anleitung zum Schreiben einer API-Referenz
short-title: Eine API-Referenz schreiben
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Dieser Leitfaden führt Sie durch alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie mit der Dokumentation einer API beginnen, gibt es einige Dinge, die Sie vorbereiten und planen sollten, bevor Sie tatsächlich mit dem Schreiben beginnen.

### Vorausgesetzte Kenntnisse

Es wird angenommen, dass Sie vor dem Lesen dieses Leitfadens grundlegende Kenntnisse über folgende Themen haben:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist dabei am wichtigsten.
- Das Lesen von Webtechnologie-Spezifikationen. Sie werden diese häufig betrachten, während Sie APIs dokumentieren.

Alles andere kann man unterwegs lernen.

### Benötigte Ressourcen

Bevor Sie mit der Dokumentation einer API beginnen, sollten Sie folgende Ressourcen verfügbar haben:

1. Die neueste Spezifikation:
   Unabhängig davon, ob es sich um eine W3C-Empfehlung oder einen frühen Entwurf eines Editors handelt, sollten Sie sich auf den neuesten verfügbaren Entwurf der Spezifikation beziehen, der die API abdeckt (oder die Spezifikationen, die sie abdecken).
   Um ihn zu finden, können Sie normalerweise eine Websuche durchführen. Die neueste Version wird oft von allen Versionen der Spezifikation aus verlinkt, unter "neuester Entwurf" oder Ähnlichem.
2. Die neuesten modernen Webbrowser:
   Diese sollten experimentelle/Alpha-Versionen sein, wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/en/chrome/canary/), die eher die von Ihnen dokumentierten Funktionen unterstützen.
   Dies ist besonders wichtig, wenn Sie eine neue/experimentelle API dokumentieren.
3. Demos/Blogposts/weitere Informationen: Finden Sie so viele Informationen wie möglich.
4. Nützliche technische Kontakte:
   Es ist wirklich nützlich, einen freundlichen technischen Kontakt zu haben, an den Sie Fragen zur Spezifikation stellen können, jemanden, der an der Standardisierung der API beteiligt ist oder sie in einem Browser implementiert.
   Gute Orte, um diese zu finden, sind:
   - Ihr internes Firmenverzeichnis, wenn Sie für ein relevantes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, die an der Diskussion dieser API beteiligt ist, wie Mozillas [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Zum Beispiel listet die [Web Audio API Spezifikation](https://webaudio.github.io/web-audio-api/) die Autoren und deren Kontaktdaten am Anfang auf.

### Nehmen Sie sich Zeit, um mit der API zu spielen

Sie werden im Laufe der Dokumentation einer API viele Male Demos erstellen, aber es ist nützlich, damit zu beginnen, sich mit der Funktionsweise der API vertraut zu machen — lernen Sie, was die Hauptschnittstellen/Eigenschaften/Methoden sind, was die primären Anwendungsfälle sind und wie Sie einfache Funktionalitäten damit schreiben.

Wenn sich eine API geändert hat, müssen Sie vorsichtig sein, dass vorhandene Demos, auf die Sie sich beziehen oder von denen Sie lernen, nicht veraltet sind. Überprüfen Sie die Hauptkonstrukte, die in der Demo verwendet werden, um zu sehen, ob sie mit der neuesten Spezifikation übereinstimmen. Sie funktionieren möglicherweise auch nicht in aktuellen Browsern, aber dies ist kein sehr zuverlässiger Test, da oft alte Funktionen aus Gründen der Rückwärtskompatibilität weiterhin unterstützt werden.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde und z. B. eine Methode nun anders definiert ist, die alte Methode jedoch weiterhin in Browsern funktioniert, müssen Sie oft beide an derselben Stelle dokumentieren, damit die alten und neuen Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf die gefundenen Demos oder fragen Sie einen technischen Kontakt.

### Erstellen Sie die Liste der Dokumente, die Sie schreiben oder aktualisieren müssen

Eine API-Referenz enthält in der Regel die folgenden Seiten. Weitere Details darüber, was jede Seite enthält, Beispiele und Vorlagen finden Sie in unserem [Seitenarten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) Artikel. Bevor Sie beginnen, sollten Sie eine Liste aller Seiten erstellen, die Sie verfassen sollten.

1. Übersichtsseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfaden-Seiten
8. Beispiele

> [!NOTE]
> In diesem Artikel werden wir Beispiele zur [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden.

#### Übersichtsseiten

Auf einer einzigen API-Übersichtsseite werden die Rolle der API, ihre obersten Schnittstellen, verwandte Funktionen in anderen Schnittstellen und andere hochrangige Details beschrieben. Ihr Name und Slug sollten der Name der API plus "API" am Ende sein. Sie wird als oberste Ebene der API-Referenz, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API) platziert.

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Schnittstellenseiten

Jede Schnittstelle hat auch ihre eigene Seite, auf der der Zweck der Schnittstelle beschrieben, alle Mitglieder (Konstruktoren, Methoden, Eigenschaften usw.) aufgelistet und gezeigt wird, mit welchen Browsern sie kompatibel ist. Der Name und Slug einer Seite sollten der Name der Schnittstelle genauso sein, wie er in der Spezifikation geschrieben ist. Jede Seite wird als oberste Ebene der API-Referenz, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API) platziert.

Beispiele:

- Titel: _AudioContext_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext](/de/docs/Web/API/AudioContext)

<!---->

- Titel: _AudioNode_
- Slug: _AudioNode_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioNode](/de/docs/Web/API/AudioNode)

> [!NOTE]
> Wir dokumentieren jedes Mitglied, das in der Schnittstelle erscheint. Sie sollten folgende Regeln beachten:

- Wir dokumentieren Methoden, die im Prototyp eines Objekts definiert sind, das diese Schnittstelle implementiert (Instanzenmethoden), und Methoden, die in der tatsächlichen Klasse selbst definiert sind (statische Methoden).
  Sollte es selten vorkommen, dass beide auf derselben Schnittstelle existieren, sollten Sie sie in separaten Abschnitten auf der Seite auflisten (Statische Methoden/Instanzmethoden).
  Normalerweise existieren nur Instanzmethoden, in diesem Fall können Sie diese unter dem Titel "Methoden" platzieren.
- Wir dokumentieren keine geerbten Eigenschaften und Methoden der Schnittstelle: Sie werden auf der jeweiligen übergeordneten Schnittstelle aufgelistet. Wir weisen jedoch auf deren Existenz hin.
- Wir dokumentieren Eigenschaften und Methoden, die in Mixins definiert sind. Bitte lesen Sie den [Beitrag zum Leitfaden für Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) für weitere Details.
- Spezielle Methoden wie der Stringifier (`toString()`) und der Jsonifier (`toJSON()`) werden ebenfalls aufgelistet, wenn sie existieren.
- Benannte Konstruktoren (wie `Image()` für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)) werden ebenfalls aufgelistet, falls relevant.

#### Konstruktorseiten

Jede Schnittstelle hat null oder einen Konstruktor, der auf einer Unterseite der Seite der Schnittstelle dokumentiert wird. Diese Seite beschreibt den Zweck des Konstruktors und zeigt, wie seine Syntax aussieht, Beispiele zur Verwendung, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name des Konstruktors, der genau der gleiche wie der Schnittstellenname ist, und der Titel ist der Schnittstellenname, Punkt, Konstruktorname und dann Klammern am Ende.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Eigenschaftsseiten

Jede Schnittstelle hat null oder mehr Eigenschaften, die auf Unterseiten der Seite der Schnittstelle dokumentiert werden. Jede Seite beschreibt den Zweck der Eigenschaft und zeigt, wie ihre Syntax aussieht, Beispiele zur Verwendung, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name der Eigenschaft, und der Titel ist der Schnittstellenname, Punkt, dann der Name der Eigenschaft.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methodenseiten

Jede Schnittstelle hat null oder mehr Methoden, die auf Unterseiten der Seite der Schnittstelle dokumentiert werden. Jede Seite beschreibt den Zweck der Methode und zeigt, wie ihre Syntax aussieht, Beispiele zur Verwendung, Informationen zur Browser-Kompatibilität usw. Der Slug ist der Name der Methode, und der Titel ist der Schnittstellenname, Punkt, Methodenname, dann Klammern.

Beispiele:

- Titel: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/close](/de/docs/Web/API/AudioContext/close)

<!---->

- Titel: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/createGain](/de/docs/Web/API/BaseAudioContext/createGain)

#### Ereignisseiten

Dokumentieren Sie Ereignisse als Unterseiten ihrer Zielschnittstellen und verwenden Sie den Slug _eventname_\_event mit dem Titel, der auf `Interface: eventName event` gesetzt ist.

Erstellen Sie keine Seiten für `on`-Ereignishandler-Eigenschaften. Erwähnen Sie beide Möglichkeiten zum Zugriff auf das Ereignis auf der `eventName_event`-Seite.

Beispiel:

- Titel: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/de/docs/Web/XRSession/end_event](/de/docs/Web/API/XRSession/end_event)

#### Konzept-/Leitfaden-Seiten

Die meisten API-Referenzen haben mindestens einen Leitfaden und manchmal auch eine Konzeptseite, die dazu gehört. Mindestens sollte eine API-Referenz einen Leitfaden namens "Using the _name-of-api_" enthalten, der eine grundlegende Anleitung zur Verwendung der API bietet. Komplexere APIs können mehrere Leitfäden zur Nutzung erfordern, um zu erklären, wie verschiedene Aspekte der API verwendet werden.

Falls erforderlich, können Sie auch einen Artikeln mit Konzepten namens "_name-of-api_ concepts" einschließen, der Erklärungen der Theorie hinter allen Konzepten bietet, die mit der API zusammenhängen und die Entwickler verstehen sollten, um sie effektiv zu nutzen.

Diese Artikel sollten alle als Unterseiten der API-Übersichtsseite erstellt werden. Zum Beispiel hat die Web Audio API vier Leitfäden und einen Konzepte-Artikel:

- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Beispiele

Sie sollten einige Beispiele erstellen, die mindestens die häufigsten Anwendungsfälle der API demonstrieren. Sie können diese überall dort platzieren, wo es angebracht ist, obwohl der empfohlene Ort das [MDN GitHub Repository](https://github.com/mdn/) ist.

#### Alles auflisten

Eine Liste all dieser Unterseiten zu erstellen, ist eine gute Möglichkeit, um sie zu verfolgen. Zum Beispiel:

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

Jede Schnittstelle in der Liste hat eine separate Seite, die dafür erstellt und als Unterseite von `https://developer.mozilla.org/de/docs/Web/API` erstellt wird; zum Beispiel, das Dokument für [`AudioContext`](/de/docs/Web/API/AudioContext) wäre unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext` zu finden. Jede [Schnittstellenseite](#schnittstellenseiten) erklärt, was diese Schnittstelle macht und bietet eine Liste der Methoden und Eigenschaften, die die Schnittstelle umfassen. Dann wird jede Methode und Eigenschaft auf ihrer eigenen Seite dokumentiert, die als Unterseite der entsprechenden Schnittstelle erstellt wird, deren Mitglied sie ist. Zum Beispiel wird [`BaseAudioContext/currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext/currentTime` dokumentiert.

## Erstellen Sie die Seiten

Erstellen Sie nun die benötigten Seiten gemäß den untenstehenden Strukturen. Unsere [MDN-Inhalts-README-Datei](https://github.com/mdn/content#adding-a-new-document) enthält Anweisungen zum Erstellen eines neuen Dokuments, und unser Leitfaden zu [Seitenarten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) enthält weitere Beispiele und Seitentemplates, die nützlich sein könnten.

### Struktur einer Übersichtsseite

API-Landing-Pages unterscheiden sich stark in der Länge, je nachdem, wie groß die API ist, aber sie haben alle im Grunde die gleichen Merkmale. Siehe [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API) für ein Beispiel einer größeren Landing-Seite.

Die Merkmale einer Landing-Seite sind unten dargestellt:

1. **Beschreibung**: Der erste Absatz der Landing-Seite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der API bieten.
2. **Konzepte und Anwendungsbereich**: Der nächste Abschnitt sollte mit "Konzepte und Anwendungsbereich von \[name of API]" betitelt sein und einen Überblick über alle wichtigen Funktionen geben, die die API bietet, welche Probleme sie löst und wie sie funktioniert — alles auf hohem Niveau. Dieser Abschnitt sollte recht kurz sein und nicht auf Code oder spezifische Implementierungsdetails eingehen.
3. **Liste der Schnittstellen**: Dieser Abschnitt sollte mit "Schnittstellen von \[name of API]" betitelt sein und Links zur Referenzseite für jede Schnittstelle, die Teil der API ist, sowie eine kurze Beschreibung dessen bieten, was jede macht. Weitere Informationen finden Sie im Abschnitt "Referenzieren anderer API-Funktionen mit dem \\{{domxref}} Makro".
4. **Beispiele**: Dieser Abschnitt sollte einen oder zwei Anwendungsfälle für die API zeigen.
5. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für weitere Details.
6. **Browser-Kompatibilität**: Jetzt müssen Sie eine Tabelle zur Browser-Kompatibilität einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
7. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Platz, um weitere Links aufzunehmen, die beim Lernen über diese Technologie nützlich sein könnten, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken usw.

### Struktur einer Schnittstellenseite

Nun sollten Sie bereit sein, mit dem Schreiben Ihrer Schnittstellenseiten zu beginnen. Jede Schnittstellenreferenzseite sollte die folgende Struktur haben:

1. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}} Makro in die erste Zeile jeder Schnittstellenseite ein, einschließlich des Namens der API als Argument, also \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, das Eigenschaften und Methoden enthält, sowie andere Schnelllinks, wie sie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Makro definiert sind (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgelistet ist). Das Menü sieht etwa so aus wie der untenstehende Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden](apiref-links.png)
2. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dafür müssen Sie [den Status im Browser-compat-data Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
3. **Beschreibung**: Der erste Absatz der Schnittstellenseite sollte eine kurze prägnante Beschreibung des übergeordneten Zwecks der Schnittstelle bieten. Möglicherweise möchten Sie auch ein paar weitere Absätze hinzufügen, falls zusätzliche Beschreibung erforderlich ist. Wenn die Schnittstelle tatsächlich ein Wörterbuch ist, sollten Sie diesen Begriff anstelle von "Schnittstelle" verwenden.
4. **Vererbungsdiagramm:** Verwenden Sie das [`\{{InheritanceDiagram}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/inheritance_diagram.rs) Makro, um ein SVG-Vererbungsdiagramm für die Schnittstelle einzubetten.
5. **Liste der Eigenschaften, Liste der Methoden**: Diese Abschnitte sollten mit "Eigenschaften" und "Methoden" betitelt sein und Links (mit dem \\{{domxref}} Makro) zu einer Referenzseite für jede Eigenschaft/Methode dieser Schnittstelle enthalten, zusammen mit einer Beschreibung dessen, was jede macht. Diese sollten mit [Beschreibung/Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) markiert werden. Jede Beschreibung sollte kurz und prägnant sein — ein Satz, wenn möglich. Siehe den Abschnitt "Referenzieren anderer API-Funktionen mit dem \\{{domxref}} Makro" für einen schnelleren Weg, Links zu anderen Seiten zu erstellen.

   Zu Beginn beider Abschnitte, vor Beginn der Liste der Eigenschaften/Methoden, weisen Sie mit dem entsprechenden Satz auf die Vererbung hin, kursiv:

   - _Diese Schnittstelle implementiert keine speziellen Eigenschaften, erbt jedoch Eigenschaften von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Eigenschaften von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle implementiert keine speziellen Methoden, erbt jedoch Methoden von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Methoden von \\{{domxref("XYZ")}} und \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Eigenschaften, die read-only sind, sollten das \\{{ReadOnlyInline}}-Makro haben, das ein kleines "Read only"-Abzeichen erstellt und auf derselben Linie wie ihre \\{{domxref}}-Links enthalten ist (nach der Verwendung der \\{{experimental_inline}}, \\{{non-standard_Inline}} und \\{{deprecated_inline}}-Makros, falls einige davon benötigt werden).

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, um die typische Verwendung einer Hauptfunktion der API zu zeigen. Anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Auszug daraus auflisten. Für eine vollständige Codeauflistung können Sie auf ein [GitHub](https://github.com/) Repository verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit dem [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) Feature erstellt wurde (solange es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Feature verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für weitere Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Tabelle zur Browser-Kompatibilität einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Polyfill**: Falls angebracht, fügen Sie diesen Abschnitt ein und bieten Sie Code für ein Polyfill, das es ermöglicht, die API auch in Browsern zu verwenden, die sie nicht implementieren. Wenn kein Polyfill existiert oder benötigt wird, lassen Sie diesen Abschnitt vollständig weg.
10. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Platz, um weitere Links aufzunehmen, die beim Lernen über diese Technologie nützlich sein könnten, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken usw. Wir haben eine liberale Richtlinie zum Verlinken auf externe Quellen, beachten Sie jedoch:

    - Fügen Sie keine Seiten mit denselben Informationen wie auf einer anderen Seite im MDN hinzu; verlinken Sie stattdessen auf diese Seite.
    - Nennen Sie keine Autorennamen - wir sind eine Autoren-neutrale Dokumentationsseite. Verlinken Sie auf das Dokument; der Autorenname wird dort angezeigt.
    - Achten Sie besonders auf Blogbeiträge: Sie neigen dazu, veraltet zu werden (alte Syntax, falsche Kompatibilitätsinformationen). Verlinken Sie nur darauf, wenn sie einen klaren Mehrwert bieten, der in einem gepflegten Dokument nicht zu finden ist.
    - Verwenden Sie keine Handlungsverben wie "Siehe … für weitere Informationen" oder "Klicken Sie …", Sie wissen nicht, ob Ihr Leser in der Lage ist, den Link zu sehen oder darauf zu klicken (wie auf einer Papierkopie des Dokuments).

#### Beispiel für Schnittstellenseiten

Die folgenden sind exemplarische Beispiele für Schnittstellenseiten:

- [`Request`](/de/docs/Web/API/Request) aus der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) aus der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Eigenschaftsseite

Erstellen Sie Ihre Eigenschaftsseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Eigenschaftsseite, um als Grundlage für Ihre neue Seite zu dienen.

Bearbeiten Sie den Eigenschaftsseitennamen, um dem Konventionsmuster `Interface.property_name` zu folgen.

Eigenschaftsseiten müssen die folgenden Abschnitte haben:

1. **Titel**: Der Titel der Seite muss **InterfaceName.propertyName** sein. Der Schnittstellenname muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript im Prototyp von Objekten implementiert ist, fügen wir `.prototype.` nicht in den Titel ein, wie wir es in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in die erste Zeile jeder Eigenschaftsseite ein, einschließlich des Namens der API als Argument, also \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, das Eigenschaften und Methoden enthält, sowie andere Schnelllinks, wie sie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Makro definiert sind (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgelistet ist). Das Menü sieht etwa so aus wie der untenstehende Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dafür müssen Sie [den Status im Browser-compat-data Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Beschreibung**: Der erste Absatz der Eigenschaftsseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Eigenschaft bieten. Möglicherweise möchten Sie auch ein paar weitere Absätze hinzufügen, falls zusätzliche Beschreibung erforderlich ist. Offensichtliche Zusatzinformationen sind der Standard-/Initialwert und ob sie schreibgeschützt ist oder nicht. Die Struktur des ersten Satzes muss sein:

   - Für schreibgeschützte Eigenschaften
     - : Die **`InterfaceName.property`**-Eigenschaft ist schreibgeschützt und gibt einen \\{{domxref("type")}} zurück, der …
   - Für andere Eigenschaften
     - : Die **`InterfaceName.property`**-Eigenschaft ist ein \\{{domxref("type")}}, der …

   > [!NOTE] > `InterfaceName.property` sollte in `<code>` sein und sollte zusätzlich im ersten Auftreten in Fettschrift (`<strong>`) sein.

5. **Wert**: Der Abschnitt "Wert" enthält eine Beschreibung des Werts der Eigenschaft. Dies sollte den Datentyp der Eigenschaft und was er repräsentiert enthalten. Ein Beispiel finden Sie unter [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars).

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, um die typische Verwendung der betreffenden Eigenschaft zu zeigen. Sie sollten mit einem einfachen Beispiel beginnen, das zeigt, wie ein Objekt des Typs erstellt und auf die Eigenschaft zugegriffen wird. Komplexere Beispiele können nach einem solchen Beispiel hinzugefügt werden. In diesen zusätzlichen Beispielen sollten Sie nicht den gesamten Code, sondern einen interessanten Auszug auflisten. Für eine vollständige Codeauflistung können Sie auf ein [GitHub](https://github.com/) Repository verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit dem [GitHub gh-pages Feature](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (solange es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Feature verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für weitere Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Tabelle zur Browser-Kompatibilität einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Platz, um weitere Links aufzunehmen, die bei der Verwendung dieser Technologie nützlich sein könnten, wie Methoden und Eigenschaften, die durch eine Änderung dieser Eigenschaft beeinflusst werden oder Ereignisse, die in Bezug auf sie ausgelöst werden. Weitere Links, die beim Lernen über diese Technologie nützlich sind, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken,… können hinzugefügt werden, obwohl es nützlich sein kann, sie stattdessen auf der Schnittstellenreferenzseite hinzuzufügen.

#### Beispiel für Eigenschaftsseiten

Die folgenden sind exemplarische Beispiele für Eigenschaftsseiten:

- [`Request.method`](/de/docs/Web/API/Request/method) aus der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) aus der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Methodenseite

Erstellen Sie Ihre Methodenseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Methodenseite, um als Grundlage für Ihre neue Seite zu dienen.

Methodenseiten benötigen die folgenden Abschnitte:

1. **Titel**: Der Titel der Seite muss **InterfaceName.method()** sein (mit den beiden abschließenden Klammern), der Slug (das Ende der Seiten-URL) darf jedoch die Klammern nicht enthalten. Auch der Schnittstellenname muss mit einem Großbuchstaben anfangen. Obwohl eine Schnittstelle in JavaScript im Prototyp von Objekten implementiert ist, setzen wir `.prototype.` nicht in den Titel, wie wir es in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}} Makro in die erste Zeile jeder Methodenseite ein, einschließlich des Namens der API als Argument, also \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, das Eigenschaften und Methoden enthält, sowie andere Schnelllinks, wie sie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Makro definiert sind (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, wenn sie dort noch nicht aufgelistet ist). Das Menü sieht etwa so aus wie der untenstehende Screenshot.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird bei Bedarf automatisch hinzugefügt. Dafür müssen Sie [den Status im Browser-compat-data Repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Beschreibung**: Der erste Absatz der Methodenseite sollte eine kurze prägnante Beschreibung des übergeordneten Zwecks der Methode bieten. Möglicherweise möchten Sie auch ein paar zusätzliche Absätze einschließen, falls weitere Beschreibung erforderlich ist. Offensichtliche Zusatzinformationen sind die Standardparameterwerte, jede Theorie, auf der die Methode beruht, und was die Parameterwerte tun.

   - Der Anfang des ersten Satzes muss der folgenden Struktur folgen:
     - : Die **`InterfaceName.method()`**-Methode der Schnittstelle …

   > [!NOTE] > `InterfaceName.method()` sollte in `<code>` sein, und sollte auch im ersten Auftreten in Fettschrift (`<strong>`) sein.

5. **Syntax**: Der Syntax-Abschnitt sollte ein 2–3-zeiliges Beispiel enthalten – normalerweise nur die Erstellung der Schnittstelle, dann der Aufruf der Schnittstellenmethode.

   - Der Syntax sollte die Form haben:
     - : method(param1, param2, …)

   Der Syntax-Abschnitt sollte drei Unterabschnitte enthalten (siehe [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) für ein Beispiel):

   - "Parameter": Dies sollte eine Definitionsliste (oder unsortierte Liste) enthalten, die die verschiedenen Parameter, die die Methode nimmt, benennt und beschreibt. Sie sollten das \\{{optional_inline}} Makro neben den Parameternamen verwenden, falls optionale Parameter vorhanden sind. Wenn es keine Parameter gibt, sollte dieser Abschnitt ausgelassen werden.
   - "Rückgabewert": Dies sollte den Rückgabewert der Methode angeben, sei es ein einfacher Wert wie ein Double oder Boolean oder ein komplexerer Wert wie ein anderes Schnittstellenobjekt, in welchem Fall Sie das \\{{domxref}} Makro verwenden können, um auf die entsprechende MDN-API-Seite zu dieser Schnittstelle zu verlinken (falls vorhanden). Eine Methode könnte nichts zurückgeben, in welchem Fall der Rückgabewert als "\\{{jsxref('undefined')}}" geschrieben werden sollte (was in der gerenderten Seite folgendermaßen aussieht: {{jsxref("undefined")}}).
   - "Ausnahmen": Dies sollte die verschiedenen Ausnahmen auflisten, die beim Aufrufen der Methode auftreten können, und unter welchen Umständen sie auftreten. Wenn es keine Ausnahmen gibt, sollte dieser Abschnitt ausgelassen werden.

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, um die typische Verwendung der betreffenden Methode zu zeigen. Anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Auszug daraus auflisten. Für eine vollständige Codeauflistung können Sie auf ein [GitHub](https://github.com/) Repository verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit dem [GitHub gh-pages Feature](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (solange es nur clientseitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Feature verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationstabelle**: An dieser Stelle müssen Sie eine Spezifikationstabelle einfügen – siehe den Abschnitt "Erstellen einer Spezifikationsreferenztabelle" für weitere Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Tabelle zur Browser-Kompatibilität einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.

#### Beispiel für Methodenseiten

Die folgenden sind exemplarische Beispiele für Methodenseiten:

- [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) aus der [Web Animations API](/de/docs/Web/API/Web_Animations_API).
- [`fetch()`](/de/docs/Web/API/Window/fetch) aus der [Fetch API](/de/docs/Web/API/Fetch_API).

## Sidebars

Sobald Sie Ihre API-Referenzseiten erstellt haben, möchten Sie die richtigen Sidebars daran einfügen, um die Seiten miteinander zu verknüpfen. Unser [Leitfaden zu API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) erklärt, wie das geht.
