---
title: Wie man eine API-Referenz schreibt
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: 188594e189f5e73267faf2626adbb84d26128b15
---

{{MDNSidebar}}

Dieser Leitfaden führt Sie durch alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie mit der Dokumentation einer API beginnen, gibt es einige Dinge, die Sie vorbereiten und im Voraus planen sollten, bevor Sie tatsächlich mit dem Schreiben beginnen.

### Voraussetzungen

Es wird vorausgesetzt, dass Sie, bevor Sie diesen Leitfaden lesen, ein angemessenes Wissen über folgende Themen haben:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist am wichtigsten.
- Lesen von Webtechnologie-Spezifikationen. Sie werden diese oft anschauen, während Sie APIs dokumentieren.

Alles andere kann im Laufe der Zeit erlernt werden.

### Erforderliche Ressourcen

Bevor Sie mit der Dokumentation einer API beginnen, sollten Sie folgende Ressourcen zur Verfügung haben:

1. Die neueste Spezifikation:
   Egal, ob es sich um eine W3C-Empfehlung oder einen frühen Editor-Entwurf handelt, Sie sollten sich auf den neuesten verfügbaren Entwurf der Spezifikation beziehen, die diese API abdeckt. Dies finden Sie in der Regel mit einer Websuche. Die neueste Version ist oft über alle Versionen der Spezifikation verlinkt, unter "neuester Entwurf" oder ähnlich.
2. Die neuesten modernen Webbrowser:
   Diese sollten experimentelle/Alpha-Builds sein, wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder [Chrome Canary](https://www.google.com/intl/en/chrome/canary/), die eher die von Ihnen dokumentierten Funktionen unterstützen. Dies ist besonders wichtig, wenn Sie eine neue/experimentelle API dokumentieren.
3. Demos/Blog-Beiträge/weitere Informationen: Suchen Sie so viele Informationen wie möglich.
4. Nützliche ingenieurtechnische Kontakte:
   Es ist sehr nützlich, einen freundlichen, ingenieurstechnischen Kontakt zu finden, um Fragen zur Spezifikation zu stellen, jemanden, der in die Standardisierung der API oder deren Implementierung in einem Browser involviert ist. Gute Orte, um solche Personen zu finden, sind:

   - Ihr internes Firmenadressbuch, wenn Sie für ein relevantes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, die an der Diskussion dieser API beteiligt ist, wie Mozillas [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Zum Beispiel listet die [Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/) die Autoren und deren Kontaktdaten oben auf.

### Nehmen Sie sich Zeit, um mit der API zu spielen

Sie werden im Verlauf der Dokumentation für eine API viele Male Demos erstellen müssen, aber es ist nützlich, damit zu beginnen, sich mit der Funktionsweise der API vertraut zu machen — lernen Sie, was die Hauptschnittstellen/Eigenschaften/Methoden sind, was die primären Anwendungsfälle sind und wie man einfache Funktionalitäten damit schreibt.

Wenn sich eine API geändert hat, müssen Sie darauf achten, dass bestehende Demos, auf die Sie sich beziehen oder von denen Sie lernen, nicht veraltet sind. Überprüfen Sie die Hauptkonstrukte, die in der Demo verwendet werden, um festzustellen, ob sie mit der neuesten Spezifikation übereinstimmen. Sie funktionieren möglicherweise auch nicht in aktuellen Browsern, aber dies ist kein sehr zuverlässiger Test, da oft alte Funktionen aus Kompatibilitätsgründen weiterhin unterstützt werden.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, sodass beispielsweise eine Methode jetzt anders definiert ist, aber die alte Methode in Browsern noch funktioniert, müssen Sie oft beide im selben Dokument erwähnen, damit die alten und neuen Methoden abgedeckt sind. Wenn Sie Hilfe benötigen, ziehen Sie die gefundenen Demos zu Rate oder fragen Sie einen ingenieurtechnischen Kontakt.

### Erstellen Sie die Liste von Dokumenten, die Sie schreiben oder aktualisieren müssen

Eine API-Referenz enthält im Allgemeinen die folgenden Seiten. Sie können weitere Details dazu, was jede Seite enthält, Beispiele und Vorlagen in unserem Artikel [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) finden. Bevor Sie beginnen, sollten Sie eine Liste aller Seiten erstellen, die Sie erstellen sollten.

1. Übersichtsseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept/Leitfaden-Seiten
8. Beispiele

> [!NOTE]
> Wir werden uns in diesem Artikel auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) beziehen, um Beispiele zu geben.

#### Übersichtsseiten

Eine einzelne API-Übersichtsseite wird verwendet, um die Rolle der API, ihre Top-Level-Schnittstellen, verwandte Funktionen, die in anderen Schnittstellen enthalten sind, und andere Details auf hoher Ebene zu beschreiben. Ihr Name und Slug sollten der Name der API mit dem Zusatz "API" am Ende sein. Sie wird in der obersten Ebene der API-Referenz platziert, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Schnittstellenseiten

Jede Schnittstelle hat ebenfalls ihre eigene Seite, die den Zweck der Schnittstelle beschreibt, alle Mitglieder (Konstruktoren, Methoden, Eigenschaften etc.) auflistet und zeigt, mit welchen Browsern sie kompatibel ist. Der Name und Slug der Seite sollten genau dem Namen der Schnittstelle in der Spezifikation entsprechen. Jede Seite wird in der obersten Ebene der API-Referenz platziert, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiele:

- Titel: _AudioContext_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext](/de/docs/Web/API/AudioContext)

<!---->

- Titel: _AudioNode_
- Slug: _AudioNode_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioNode](/de/docs/Web/API/AudioNode)

> [!NOTE]
> Wir dokumentieren jedes Mitglied, das in der Schnittstelle auftritt. Sie sollten die folgenden Regeln beachten:

- Wir dokumentieren Methoden, die im Prototyp eines Objekts, das diese Schnittstelle implementiert (Instanzmethoden), und Methoden, die auf der tatsächlichen Klasse selbst definiert sind (statische Methoden), definiert sind. In den seltenen Fällen, dass beide auf derselben Schnittstelle existieren, sollten Sie sie in separaten Abschnitten auf der Seite auflisten (Statische Methoden/Instanzmethoden). Normalerweise existieren nur Instanzmethoden, in diesem Fall können Sie diese unter dem Titel "Methoden" platzieren.
- Wir dokumentieren keine geerbten Eigenschaften und Methoden der Schnittstelle: Sie sind auf der jeweiligen Elternschnittstelle aufgelistet. Wir erwähnen jedoch deren Existenz.
- Wir dokumentieren Eigenschaften und Methoden, die in Mixins definiert sind. Bitte sehen Sie in der [Beitragsrichtlinie für Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) für mehr Details nach.
- Spezielle Methoden wie der Stringifier (`toString()`) und der JSONizer (`toJSON()`) werden ebenfalls aufgelistet, falls sie existieren.
- Benannte Konstruktoren (wie `Image()` für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)) werden ebenfalls aufgelistet, falls relevant.

#### Konstruktorseiten

Jede Schnittstelle hat null oder einen Konstruktor, der auf einer Unterseite der Schnittstellenseite dokumentiert ist. Sie beschreibt den Zweck des Konstruktors und zeigt, wie dessen Syntax aussieht, Nutzungsbeispiele, Informationen zur Browser-Kompatibilität etc. Der Slug ist der Name des Konstruktors, der genau mit dem Schnittstellennamen übereinstimmt, und der Titel ist Schnittstellenname, Punkt, Konstruktorname, dann Klammern am Ende.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Eigenschaftsseiten

Jede Schnittstelle hat null oder mehr Eigenschaften, die auf Unterseiten der Schnittstellenseite dokumentiert werden. Jede Seite beschreibt den Zweck der Eigenschaft und zeigt, wie dessen Syntax aussieht, Nutzungsbeispiele, Informationen zur Browser-Kompatibilität etc. Der Slug ist der Name der Eigenschaft, und der Titel ist Schnittstellenname, Punkt, dann Eigenschaftenname.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methodenseiten

Jede Schnittstelle hat null oder mehr Methoden, die auf Unterseiten der Schnittstellenseite dokumentiert werden. Jede Seite beschreibt den Zweck der Methode und zeigt, wie deren Syntax aussieht, Nutzungsbeispiele, Informationen zur Browser-Kompatibilität etc. Der Slug ist der Name der Methode, und der Titel ist Schnittstellenname, Punkt, Methodenname, dann Klammern.

Beispiele:

- Titel: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/close](/de/docs/Web/API/AudioContext/close)

<!---->

- Titel: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/createGain](/de/docs/Web/API/BaseAudioContext/createGain)

#### Ereignisseiten

Dokumentieren Sie Ereignisse als Unterseiten ihrer Zielschnittstellen und verwenden Sie den Slug _eventname_\_event mit dem Titel gesetzt auf `Interface: eventName event`.

Erstellen Sie keine Seiten für `on` Ereignishandlereigenschaften. Erwähnen Sie beide Zugriffswege auf das Ereignis auf der `eventName_event` Seite.

Beispiel:

- Titel: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/de/docs/Web/XRSession/end_event](/de/docs/Web/API/XRSession/end_event)

#### Konzept/Leitfaden-Seiten

Die meisten API-Referenzen haben mindestens einen Leitfaden und manchmal auch eine Konzeptseite, die ihn begleitet. Mindestens sollte eine API-Referenz einen Leitfaden enthalten, der "Using the _name-of-api_" genannt wird, welcher eine grundlegende Anleitung zur Nutzung der API bereitstellt. Komplexere APIs können mehrere Anleitungsleitfäden erfordern, um zu erklären, wie verschiedene Aspekte der API genutzt werden.

Falls erforderlich, können Sie auch einen Konzeptartikel mit dem Titel "_name-of-api_ concepts" einschließen, welcher die Theorie hinter den mit der API verbundenen Konzepten erklärt, die Entwickler verstehen sollten, um sie effektiv zu nutzen.

Diese Artikel sollten alle als Unterseiten der API-Übersichtsseite erstellt werden. Beispielsweise hat die Web Audio API vier Leitfäden und einen Konzeptartikel:

- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Beispiele

Sie sollten einige Beispiele erstellen, die mindestens die häufigsten Anwendungsfälle der API demonstrieren. Sie können diese überall dort platzieren, wo es angemessen ist, obwohl die empfohlene Stelle das [MDN GitHub-Repo](https://github.com/mdn/) ist.

#### Erstellen Sie eine Liste von allem

Das Erstellen einer Liste all dieser Unterseiten ist eine gute Möglichkeit, den Überblick zu behalten. Zum Beispiel:

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

Jede Schnittstelle in der Liste hat eine separate Seite, die dafür erstellt wird, als Unterseite von `https://developer.mozilla.org/de/docs/Web/API`; zum Beispiel, würde das Dokument für [`AudioContext`](/de/docs/Web/API/AudioContext) sich bei `https://developer.mozilla.org/de/docs/Web/API/AudioContext` befinden. Jede [Schnittstellenseite](#schnittstellenseiten) erklärt, was diese Schnittstelle tut und bietet eine Liste der Methoden und Eigenschaften, die Teil der Schnittstelle sind. Dann wird jede Methode und Eigenschaft auf ihrer eigenen Seite dokumentiert, die als Unterseite der Schnittstelle erstellt wird, deren Mitglied sie ist. Zum Beispiel, [`BaseAudioContext/currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) ist bei `https://developer.mozilla.org/de/docs/Web/API/AudioContext/currentTime` dokumentiert.

## Erstellen Sie die Seiten

Erstellen Sie nun die benötigten Seiten entsprechend den untenstehenden Strukturen. Unser [MDN-Inhalt README](https://github.com/mdn/content#adding-a-new-document) enthält Anleitungen zur Erstellung eines neuen Dokuments, und unser [Seitentyp-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) enthält weitere Beispiele und Seitenvorlagen, die nützlich sein könnten.

### Struktur einer Übersichtsseite

API-Landingpages unterscheiden sich stark in der Länge, je nachdem, wie groß die API ist, aber sie haben alle im Grunde die gleichen Merkmale. Sehen Sie sich [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API) als Beispiel für eine große Landingpage an.

Die Merkmale einer Landingpage sind unten aufgeführt:

1. **Beschreibung**: Der erste Absatz der Landingpage sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der API bieten.
2. **Konzepte- und Nutzungsteil**: Der nächste Abschnitt sollte "\\[name of API] concepts and usage" benannt werden und einen Überblick über alle Hauptfunktionen bieten, die die API bietet, welche Probleme sie löst und wie sie funktioniert — alles auf hohem Niveau. Dieser Abschnitt sollte ziemlich kurz sein und nicht auf Code oder spezifische Implementierungsdetails eingehen.
3. **Liste der Schnittstellen**: Dieser Abschnitt sollte "\\[name of API] interfaces" benannt werden und Links zur Referenzseite für jede Schnittstelle der API sowie eine kurze Beschreibung, was jede einzelne tut, bereitstellen. Verwenden Sie das "Referenzieren von anderen API-Funktionen mit dem \\{{domxref}} Macro" für eine schnellere Erstellung neuer Seiten.
4. **Beispiele**: Dieser Abschnitt sollte einen oder zwei einfache Anwendungsfälle für die API zeigen.
5. **Spezifikationenstabelle**: An dieser Stelle müssen Sie eine Spezifikationenstabelle einfügen — Weitere Informationen finden Sie im Abschnitt "Erstellen einer Spezifikationsreferenztabelle".
6. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
7. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um weitere Links zu enthalten, die beim Lernen dieser Technologie nützlich sein können, einschließlich MDN (und externe) Tutorials, Beispiele, Bibliotheken usw.

### Struktur einer Schnittstellenseite

Nun sollten Sie bereit sein, Ihre Schnittstellenseiten zu schreiben. Jede Schnittstellenreferenzseite sollte folgende Struktur beachten:

1. **\\{{APIRef}}**: Inkludieren Sie das \\{{APIRef}} Macro in der ersten Zeile jeder Schnittstellenseite, mit dem Namen der API als Argument, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Macro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, einschließlich Eigenschaften und Methoden und anderen schnellen Links, wie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Macro definiert (bitten Sie jemand, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, falls diese dort noch nicht aufgeführt ist). Das Menü wird ungefähr wie der untenstehende Screenshot aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle, mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden](apiref-links.png)
2. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardmäßig oder experimentell) wird automatisch hinzugefügt, falls nötig. Dafür müssen Sie den Status im [browser-compat-data Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses) aktualisieren.
3. **Beschreibung**: Der erste Absatz der Schnittstellenseite sollte eine kurze prägnante Beschreibung des übergeordneten Zwecks der Schnittstelle bieten. Sie können auch ein paar weitere Absätze hinzufügen, falls eine zusätzliche Beschreibung erforderlich ist. Wenn die Schnittstelle eigentlich ein Wörterbuch ist, sollten Sie diesen Begriff anstelle von "Schnittstelle" verwenden.
4. **Vererbungsdiagramm:** Verwenden Sie das [`\{{InheritanceDiagram}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/InheritanceDiagram.ejs) Makro, um ein SVG-Vererbungsdiagramm für die Schnittstelle einzufügen.
5. **Liste der Eigenschaften, Liste der Methoden**: Diese Abschnitte sollten "Eigenschaften" und "Methoden" benannt werden und Links (mit dem \\{{domxref}} Macro) zu einer Referenzseite für jede Eigenschaft/Methode dieser Schnittstelle bereitstellen, zusammen mit einer Beschreibung, was jede einzelne tut. Diese sollten mit [Beschreibung/Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) ausgezeichnet sein. Jede Beschreibung sollte kurz und prägnant sein — wenn möglich ein Satz. Verwenden Sie das "Referenzieren von anderen API-Funktionen mit dem \\{{domxref}} Macro" für eine schnellere Erstellung von Links zu anderen Seiten.

   Am Anfang beider Abschnitte, bevor Sie die Liste der Eigenschaften/Methoden beginnen, geben Sie die Vererbung mithilfe des entsprechenden Satzes an, in Kursivschrift:

   - _Diese Schnittstelle implementiert keine spezifischen Eigenschaften, erbt aber Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle implementiert keine spezifischen Methoden, erbt aber Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Eigenschaften, die schreibgeschützt sind, sollten das \\{{ReadOnlyInline}} Macro haben, das ein schickes kleines "Read only"-Abzeichen erzeugt, das auf derselben Zeile wie ihre \\{{domxref}} Links steht (nach der Verwendung der \\{{experimentalInline}}, \\{{non-standard_Inline}} und \\{{deprecatedInline}} Makros, falls einige dieser benötigt werden.

6. **Beispiele**: Fügen Sie eine Code-Auflistung hinzu, um eine typische Nutzung einer Hauptfunktion der API zu zeigen. Anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Teil davon auflisten. Für eine vollständige Codeauflistung können Sie auf ein [GitHub](https://github.com/) Repo verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mithilfe der [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) Funktion erstellt wurde (sofern es natürlich nur Client-seitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Funktion verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationenstabelle**: An dieser Stelle müssen Sie eine Spezifikationenstabelle einfügen — Weitere Informationen finden Sie im Abschnitt "Erstellen einer Spezifikationsreferenztabelle".
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Polyfill**: Falls angemessen, fügen Sie diesen Abschnitt hinzu, der Code für ein Polyfill bereitstellt, das die Nutzung der API selbst auf Browsern ermöglicht, die sie nicht implementieren. Wenn kein Polyfill existiert oder benötigt wird, lassen Sie diesen Abschnitt vollständig aus.
10. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um weitere Links zu enthalten, die beim Lernen über diese Technologie nützlich sein können, einschließlich MDN (und externe) Tutorials, Beispiele, Bibliotheken usw. Wir haben eine liberale Richtlinie für das Verlinken zu externen Quellen, aber beachten Sie Folgendes:

    - Fügen Sie keine Seiten mit denselben Informationen wie eine andere Seite im MDN ein; verlinken Sie stattdessen zu dieser Seite.
    - Geben Sie keine Autorennamen an — wir sind eine autoren-neutrale Dokumentationsseite. Verlinken Sie zum Dokument; der Autorenname wird dort angezeigt.
    - Achten Sie besonders auf Blog-Beiträge: Sie neigen dazu, veraltet zu sein (alte Syntax, falsche Kompatibilitätsinformationen). Verlinken Sie nur, wenn sie einen klaren Mehrwert bieten, der in einem gepflegten Dokument nicht gefunden werden kann.
    - Verwenden Sie keine Aktionsverben wie "Siehe … für mehr Informationen" oder "Klicken Sie auf …", Sie wissen nicht, ob Ihr Leser in der Lage ist, den Link zu sehen oder zu klicken (zum Beispiel auf einer Papierversion des Dokuments).

#### Beispiele für Schnittstellenseiten

Die folgenden sind beispielhafte Beispiele für Schnittstellenseiten:

- [`Request`](/de/docs/Web/API/Request) aus der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) aus der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Eigenschaftsseite

Erstellen Sie Ihre Eigenschaftsseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Eigenschaftsseite, um als Grundlage für Ihre neue Seite zu dienen.

Bearbeiten Sie den Eigenschaftsseitentitel, um die Konvention `Interface.property_name` zu befolgen.

Eigenschaftsseiten müssen die folgenden Abschnitte haben:

1. **Titel**: Der Titel der Seite muss **InterfaceName.propertyName** sein. Der Schnittstellenname muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert wird, fügen wir im Titel kein `.prototype.` hinzu, wie wir es im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Inkludieren Sie das \\{{APIRef}} Macro in der ersten Zeile jeder Eigenschaftsseite, mit dem Namen der API als Argument, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Macro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, einschließlich Eigenschaften und Methoden und anderen schnellen Links, wie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Macro definiert (bitten Sie jemand, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, falls diese dort noch nicht aufgeführt ist). Das Menü wird ungefähr wie der untenstehende Screenshot aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle, mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardmäßig oder experimentell) wird automatisch hinzugefügt, falls nötig. Dafür müssen Sie den Status im [browser-compat-data Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses) aktualisieren.

4. **Beschreibung**: Der erste Absatz der Eigenschaftsseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Eigenschaft bieten. Sie können auch ein paar weitere Absätze hinzufügen, falls eine zusätzliche Beschreibung erforderlich ist. Offensichtliche zusätzliche Informationen, die eingeschlossen werden sollten, sind der Standard-/Initialwert und ob sie schreibgeschützt ist oder nicht. Der Aufbau des ersten Satzes muss sein:

   - Für schreibgeschützte Eigenschaften
     - : Die **`InterfaceName.property`** schreibgeschützte Eigenschaft gibt ein \\{{domxref("type")}} zurück, das …
   - Für andere Eigenschaften
     - : Die **`InterfaceName.property`** Eigenschaft ist ein \\{{domxref("type")}}, das …

   > **Hinweis:** `InterfaceName.property` sollte in `<code>` sein, und zusätzlich beim ersten Gebrauch fett (`<strong>`) hervorgehoben sein.

5. **Wert**: Der Werteabschnitt enthält eine Beschreibung des Wertes der Eigenschaft. Dies sollte den Datentyp der Eigenschaft und das, was sie repräsentiert, enthalten. Für ein Beispiel siehe [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)

6. **Beispiele**: Fügen Sie eine Code-Auflistung hinzu, um die typische Nutzung der betreffenden Eigenschaft zu zeigen. Sie sollten mit einem einfachen Beispiel beginnen, das zeigt, wie ein Objekt dieses Typs erstellt wird und wie auf die Eigenschaft zugegriffen wird. Komplexere Beispiele können nach einem solchen Beispiel hinzugefügt werden. In diesen zusätzlichen Beispielen sollten Sie, anstatt den gesamten Code aufzulisten, einen interessanten Teil davon auflisten. Für eine vollständige Codeauflistung können Sie auf ein [GitHub](https://github.com/) Repo verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mithilfe der [GitHub gh-pages Funktion](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (sofern es nur Client-seitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Funktion verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationenstabelle**: An dieser Stelle müssen Sie eine Spezifikationenstabelle einfügen — Weitere Informationen finden Sie im Abschnitt "Erstellen einer Spezifikationsreferenztabelle".
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Siehe auch**: Der Abschnitt "Siehe auch" ist ein guter Ort, um weitere Links zu enthalten, die bei der Nutzung dieser Technologie nützlich sein können, wie Methoden und Eigenschaften, die von einer Änderung dieser Eigenschaft betroffen sind oder Ereignisse, die sich darauf beziehen. Weitere Links, die beim Lernen über diese Technologie nützlich sind, einschließlich MDN (und externe) Tutorials, Beispiele, Bibliotheken usw., können hinzugefügt werden, obwohl es möglicherweise nützlich wäre, sie stattdessen auf der Schnittstellenreferenzseite hinzuzufügen.

#### Beispiele für Eigenschaftsseiten

Die folgenden sind beispielhafte Beispiele für Eigenschaftsseiten:

- [`Request.method`](/de/docs/Web/API/Request/method) aus der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) aus der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Methodenseite

Erstellen Sie Ihre Methodenseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Methodenseite, um als Grundlage für Ihre neue Seite zu dienen.

Methodenseiten benötigen folgende Abschnitte:

1. **Titel**: Der Titel der Seite muss **InterfaceName.method()** (mit den zwei abschließenden Klammern) lauten, aber der Slug (das Ende der Seiten-URL) darf die Klammern nicht enthalten. Auch der Schnittstellenname muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert wird, fügen wir im Titel kein `.prototype.` hinzu, wie wir es im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Inkludieren Sie das \\{{APIRef}} Macro in der ersten Zeile jeder Methodenseite, mit dem Namen der API als Argument, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Macro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu erstellen, einschließlich Eigenschaften und Methoden und anderen schnellen Links, wie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Macro definiert (bitten Sie jemand, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen oder einen neuen zu erstellen, falls diese dort noch nicht aufgeführt ist). Das Menü wird ungefähr wie der untenstehende Screenshot aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle, mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro generiert wurden](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus anzeigt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardmäßig oder experimentell) wird automatisch hinzugefügt, falls nötig. Dafür müssen Sie den Status im [browser-compat-data Repository](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses) aktualisieren.

4. **Beschreibung**: Der erste Absatz der Methodenseite sollte eine kurze prägnante Beschreibung des übergeordneten Zwecks der Methode bieten. Sie können auch ein paar weitere Absätze hinzufügen, falls eine zusätzliche Beschreibung erforderlich ist. Offensichtliche zusätzliche Informationen, die eingeschlossen werden sollten, sind die Standardparameterwerte, jede Theorie, auf die sich die Methode stützt, und was die Parameterwerte bewirken.

   - Der Anfang des ersten Satzes muss die folgende Struktur haben:
     - : Die **`InterfaceName.method()`** Methoden-Schnittstelle …

   > **Hinweis:** `InterfaceName.method()` sollte in `<code>` sein und zusätzlich beim ersten Gebrauch fett (`<strong>`) hervorgehoben sein.

5. **Syntax**: Der Syntaxabschnitt sollte ein 2–3 Zeilen Beispiel enthalten — normalerweise nur die Konstruktion der Schnittstelle, dann der Aufruf der Schnittstellenmethode.

   - Die Syntax sollte wie folgt aussehen:
     - : method(param1, param2, …)

   Der Syntaxabschnitt sollte drei Unterabschnitte enthalten (siehe [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) für ein Beispiel):

   - "Parameter": Dies sollte eine Definitionsliste (oder ungeordnete Liste) enthalten, die die verschiedenen Parameter, die die Methode annimmt, benennt und beschreibt. Sie sollten das {{optional_inline}} Macro neben dem Parameternamen verwenden, im Falle von optionalen Parametern. Wenn es keine Parameter gibt, sollte dieser Abschnitt weggelassen werden.
   - "Rückgabewert": Dies sollte angeben, welchen Rückgabewert die Methode hat, sei es ein einfacher Wert wie ein Double oder Boolean, oder ein komplexerer Wert wie ein weiteres Schnittstellenobjekt, in welchem Fall Sie das \\{{domxref}} Macro verwenden können, um auf die MDN-API-Seite zu diesem Schnittstellenobjekt zu verlinken (falls sie existiert). Eine Methode könnte nichts zurückgeben, in welchem Fall der Rückgabewert als "\\{{jsxref('undefined')}}" geschrieben werden sollte (was so auf der gerenderten Seite aussehen wird: {{jsxref("undefined")}}).
   - "Ausnahmen": Dies sollte die verschiedenen Ausnahmen auflisten, die beim Aufrufen der Methode auftreten können, und unter welchen Umständen sie ausgelöst werden. Wenn es keine Ausnahmen gibt, sollte dieser Abschnitt weggelassen werden.

6. **Beispiele**: Fügen Sie eine Code-Auflistung hinzu, um die typische Nutzung der betreffenden Methode zu zeigen. Anstatt den gesamten Code aufzulisten, sollten Sie einen interessanten Teil davon auflisten. Für eine vollständige Codeauflistung sollten Sie auf ein [GitHub](https://github.com/) Repo verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mithilfe der [GitHub gh-pages Funktion](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) erstellt wurde (sofern es natürlich nur Client-seitigen Code verwendet). Wenn das Beispiel visuell ist, könnten Sie auch die MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Funktion verwenden, um es live und spielbar auf der Seite zu machen.
7. **Spezifikationenstabelle**: An dieser Stelle müssen Sie eine Spezifikationenstabelle einfügen — Weitere Informationen finden Sie im Abschnitt "Erstellen einer Spezifikationsreferenztabelle".
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.

#### Beispiele für Methodenseiten

Die folgenden sind beispielhafte Beispiele für Methodenseiten:

- [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) aus der [Web Animations API](/de/docs/Web/API/Web_Animations_API).
- [`fetch()`](/de/docs/Web/API/Window/fetch) aus der [Fetch API](/de/docs/Web/API/Fetch_API).

## Seitenleisten

Nachdem Sie Ihre API-Referenzseiten erstellt haben, möchten Sie die korrekten Seitenleisten einsetzen, um die Seiten miteinander zu verknüpfen. Unser [Leitfaden für API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) erklärt, wie.
