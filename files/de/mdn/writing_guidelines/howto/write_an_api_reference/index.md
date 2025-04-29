---
title: Wie man eine API-Referenz schreibt
short-title: Eine API-Referenz schreiben
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Dieser Leitfaden führt Sie durch alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie mit der Dokumentation einer API beginnen, gibt es einige Dinge, die Sie vorbereiten und im Voraus planen sollten, bevor Sie tatsächlich mit dem Schreiben beginnen.

### Vorausgesetztes Wissen

Es wird angenommen, dass Sie vor dem Lesen dieses Leitfadens über angemessene Kenntnisse in folgenden Bereichen verfügen:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist am wichtigsten.
- Lesen von Webtechnologie-Spezifikationen. Sie werden diese häufig ansehen, während Sie APIs dokumentieren.

Alles andere kann auf dem Weg gelernt werden.

### Vorausgesetzte Ressourcen

Bevor Sie mit der Dokumentation einer API beginnen, sollten Ihnen folgende Ressourcen zur Verfügung stehen:

1. Die neueste Spezifikation:
   Egal, ob es sich um eine W3C-Empfehlung oder einen frühen Editor-Entwurf handelt, Sie sollten sich auf den neuesten verfügbaren Entwurf der Spezifikation beziehen, die die API abdeckt (oder Spezifikationen, die die API abdecken).
   Um sie zu finden, können Sie normalerweise eine Websuche durchführen. Die neueste Version wird oft von allen Versionen der Spezifikation verlinkt, die unter "neuester Entwurf" oder ähnlichem aufgeführt sind.
2. Die neuesten modernen Webbrowser:
   Diese sollten experimentelle/Alpha-Versionen sein, wie etwa [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/en/chrome/canary/), die wahrscheinlich die Funktionen unterstützen, die Sie dokumentieren.
   Dies ist besonders wichtig, wenn Sie eine neue/experimentelle API dokumentieren.
3. Demos/Blogposts/weitere Informationen: Finden Sie so viele Informationen wie möglich.
4. Nützliche Engineering-Kontakte:
   Es ist sehr nützlich, einen freundlichen Engineering-Kontakt zu finden, um Fragen zur Spezifikation zu stellen, jemanden, der an der Standardisierung der API oder deren Implementierung in einem Browser beteiligt ist.
   Gute Orte, um sie zu finden, sind:

   - Ihr internes Firmenadressbuch, wenn Sie für ein relevantes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, die an der Diskussion dieser API beteiligt ist, wie Mozillas [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Zum Beispiel listet die [Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/) die Autoren und ihre Kontaktdetails oben auf.

### Nehmen Sie sich Zeit, um mit der API zu spielen

Sie werden im Verlauf der Dokumentation einer API viele Male zurückkehren, um Demos zu erstellen, aber es ist nützlich, zu Beginn Zeit damit zu verbringen, sich damit vertraut zu machen, wie die API funktioniert — lernen Sie, was die Hauptschnittstellen/Eigenschaften/Methoden sind, was die primären Anwendungsfälle sind und wie man einfache Funktionalitäten damit schreibt.

Wenn sich eine API geändert hat, müssen Sie darauf achten, dass vorhandene Demos, auf die Sie sich beziehen oder von denen Sie lernen, nicht veraltet sind. Überprüfen Sie die Hauptkonstrukte, die in der Demo verwendet werden, um zu sehen, ob sie mit der neuesten Spezifikation übereinstimmen. Sie funktionieren möglicherweise auch nicht in aktuellen Browsern, aber dies ist kein sehr zuverlässiger Test, da oft die alten Funktionen für die Rückwärtskompatibilität weiterhin unterstützt werden.

> [!NOTE]
> Wenn die Spezifikation kürzlich so aktualisiert wurde, dass beispielsweise eine Methode jetzt anders definiert ist, die alte Methode aber weiterhin in Browsern funktioniert, müssen Sie oft beide an derselben Stelle dokumentieren, sodass sowohl die alten als auch die neuen Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf gefundene Demos oder fragen Sie einen Engineering-Kontakt.

### Erstellen Sie die Liste der Dokumente, die Sie schreiben oder aktualisieren müssen

Eine API-Referenz enthält in der Regel die folgenden Seiten.
Weitere Details zu den Inhalten jeder Seite, Beispiele und Vorlagen finden Sie in unserem Artikel über [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types).
Bevor Sie beginnen, sollten Sie eine Liste aller Seiten erstellen, die Sie erstellen sollten.

1. Übersichtsseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfaden-Seiten
8. Beispiele

> [!NOTE]
> Wir werden uns im Laufe dieses Artikels auf das [Web Audio API](/de/docs/Web/API/Web_Audio_API) für Beispiele beziehen.

#### Übersichtseiten

Eine einzelne API-Übersichtsseite wird verwendet, um die Rolle der API, ihre High-Level-Schnittstellen, verwandte Funktionen, die in anderen Schnittstellen enthalten sind, und andere hochrangige Details zu beschreiben.
Ihr Name und Slug sollten der Name der API plus "API" am Ende sein. Sie wird auf der obersten Ebene der API-Referenz platziert, als ein Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Schnittstellenseiten

Auch jede Schnittstelle erhält eine eigene Seite, die den Zweck der Schnittstelle beschreibt, alle enthaltenen Mitglieder (Konstruktoren, Methoden, Eigenschaften usw.) auflistet und zeigt, mit welchen Browsern sie kompatibel ist.
Der Name und Slug einer Seite sollten exakt der Name der Schnittstelle sein, wie in der Spezifikation geschrieben.
Jede Seite wird auf der obersten Ebene der API-Referenz platziert, als ein Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiele:

- Titel: _AudioContext_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext](/de/docs/Web/API/AudioContext)

<!---->

- Titel: _AudioNode_
- Slug: _AudioNode_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioNode](/de/docs/Web/API/AudioNode)

> [!NOTE]
> Wir dokumentieren jedes in der Schnittstelle erscheinende Mitglied. Beachten Sie folgende Regeln:

- Wir dokumentieren Methoden, die auf der Prototyp der Objekte definiert sind, die diese Schnittstelle implementieren (Instanzmethoden), und Methoden, die auf der tatsächlichen Klasse selbst definiert sind (statische Methoden).
  In den seltenen Fällen, dass beide auf derselben Schnittstelle existieren, sollten Sie sie in getrennten Abschnitten auf der Seite auflisten (Statische Methoden/Instanzmethoden).
  Normalerweise existieren nur Instanzmethoden, in diesem Fall können Sie diese unter dem Titel "Methoden" setzen.
- Wir dokumentieren nicht vererbte Eigenschaften und Methoden der Schnittstelle: sie sind auf der jeweiligen Elternschnittstelle aufgelistet. Wir weisen jedoch auf ihre Existenz hin.
- Wir dokumentieren Eigenschaften und Methoden, die in Mixins definiert sind. Bitte sehen Sie den [Beitrag-Leitfaden für Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) für mehr Details.
- Spezielle Methoden, wie der Stringifier (`toString()`) und der Jsonifier (`toJSON()`), werden ebenfalls aufgelistet, falls sie existieren.
- Benannte Konstruktoren (wie `Image()` für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)) werden auch, falls relevant, aufgelistet.

#### Konstruktorseiten

Jede Schnittstelle hat null oder einen Konstruktor, der auf einer Unterseite der Schnittstellenseite dokumentiert ist. Sie beschreibt den Zweck des Konstruktors und zeigt, wie seine Syntax aussieht, Nutzungsbeispiele, Browser-Kompatibilitätsinformationen usw. Ihr Slug ist der Name des Konstruktors, der genau derselbe wie der Schnittstellenname ist, und der Titel ist Schnittstellenname, Punkt, Konstruktorname, dann Klammern am Ende.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Eigenschaftsseiten

Jede Schnittstelle hat null oder mehr Eigenschaften, die auf untergeordneten Seiten der Schnittstellenseite dokumentiert sind. Jede Seite beschreibt den Zweck der Eigenschaft und zeigt, wie ihre Syntax aussieht, Nutzungsbeispiele, Browser-Kompatibilitätsinformationen usw. Ihr Slug ist der Name der Eigenschaft, und der Titel ist Schnittstellenname, Punkt, dann Eigenname.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methodenseiten

Jede Schnittstelle hat null oder mehr Methoden, die auf untergeordneten Seiten der Schnittstellenseite dokumentiert sind. Jede Seite beschreibt den Zweck der Methode und zeigt, wie ihre Syntax aussieht, Nutzungsbeispiele, Browser-Kompatibilitätsinformationen usw. Ihr Slug ist der Name der Methode, und der Titel ist Schnittstellenname, Punkt, Methodenname, dann Klammern.

Beispiele:

- Titel: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/close](/de/docs/Web/API/AudioContext/close)

<!---->

- Titel: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/createGain](/de/docs/Web/API/BaseAudioContext/createGain)

#### Ereignisseiten

Dokumentieren Sie Ereignisse als Unterseiten ihrer Zielschnittstellen und verwenden Sie den Slug _eventname_\_event mit dem Titel „Interface: eventName event“.

Erstellen Sie keine Seiten für `on`-Ereignis-Handler-Eigenschaften. Erwähnen Sie beide Möglichkeiten, um auf das Ereignis auf der `eventName_event`-Seite zuzugreifen.

Beispiel:

- Titel: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/de/docs/Web/XRSession/end_event](/de/docs/Web/API/XRSession/end_event)

#### Konzept-/Leitfaden-Seiten

Die meisten API-Referenzen haben mindestens einen Leitfaden und manchmal auch eine Konzeptseite, die ihn begleitet. Mindestens sollte eine API-Referenz einen Leitfaden namens „Using the _name-of-api_“ enthalten, der eine grundlegende Anleitung zur Verwendung der API bereitstellt. Komplexere APIs können mehrere Verwendungsleitfäden erfordern, um zu erklären, wie verschiedene Aspekte der API zu verwenden sind.

Bei Bedarf können Sie auch einen Konzeptartikel namens „_name-of-api_ concepts“ einfügen, der die Theorie hinter allen Konzepten erklärt, die mit der API zusammenhängen und die Entwickler verstehen sollten, um sie effektiv zu verwenden.

Diese Artikel sollten alle als Unterseiten der API-Übersichtseite erstellt werden. Zum Beispiel hat das Web Audio API vier Leitfäden und einen Konzeptartikel:

- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Beispiele

Sie sollten einige Beispiele erstellen, die mindestens die häufigsten Anwendungsfälle der API demonstrieren. Sie können diese überall dort platzieren, wo es sinnvoll ist, obwohl der empfohlene Ort das [MDN GitHub-Repo](https://github.com/mdn/) ist.

#### Liste aller Seiten erstellen

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
- Events (Liste aktualisieren)

  - start
  - end
  - …

Jede Schnittstelle in der Liste hat eine separate Seite, die als Unterseite von `https://developer.mozilla.org/de/docs/Web/API` erstellt wurde; beispielsweise wäre das Dokument für [`AudioContext`](/de/docs/Web/API/AudioContext) unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext` zu finden. Jede [Schnittstellenseite](#schnittstellenseiten) erklärt, was die Schnittstelle macht und bietet eine Liste der Methoden und Eigenschaften, die die Schnittstelle ausmachen. Dann wird jede Methode und Eigenschaft auf ihrer eigenen Seite dokumentiert, die als Unterseite der Schnittstelle erstellt wird, deren Mitglied sie ist. Zum Beispiel wird [`BaseAudioContext/currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) dokumentiert unter `https://developer.mozilla.org/de/docs/Web/API/AudioContext/currentTime`.

## Erstellen der Seiten

Erstellen Sie nun die benötigten Seiten entsprechend den folgenden Strukturen. Unser [MDN-Content-README](https://github.com/mdn/content#adding-a-new-document) enthält Anweisungen zum Erstellen eines neuen Dokuments, und unser [Leitfaden für Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) enthält weitere Beispiele und Seitenschablonen, die nützlich sein könnten.

### Struktur einer Übersichtsseite

API-Landingpages unterscheiden sich stark in der Länge, je nachdem, wie groß die API ist, aber sie werden alle grundsätzlich die gleichen Funktionen haben. Siehe [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API) für ein Beispiel einer großen Landingpage.

Die Merkmale einer Landingpage sind unten skizziert:

1. **Beschreibung**: Der erste Absatz der Landingpage sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der API bieten.
2. **Konzepte und Verwendungsabschnitt**: Der nächste Abschnitt sollte mit "\[name of API] concepts and usage" betitelt werden und eine Übersicht über alle Hauptfunktionen, die die API bietet, welchen Probleme sie löst und wie sie arbeitet — alles auf einem hohen Niveau — bieten. Dieser Abschnitt sollte eher kurz sein und nicht auf Code oder spezifische Implementierungsdetails eingehen.
3. **Liste der Schnittstellen**: Dieser Abschnitt sollte mit "\[name of API] interfaces" betitelt werden und Links zur Referenzseite für jede Schnittstelle, die die API bildet, zusammen mit einer kurzen Beschreibung dessen, was jede Schnittstelle macht, bieten. Siehe den Abschnitt "Verweisen auf andere API-Funktionen mit dem \\{{domxref}} Makro" für eine schnellere Möglichkeit, neue Seiten zu erstellen.
4. **Beispiele**: Dieser Abschnitt sollte einen oder zwei Anwendungsfälle für die API zeigen.
5. **Spezifikationstabellen**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationstabelle" für mehr Details.
6. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
7. **Siehe auch**: Die "Siehe auch"-Sektion ist ein guter Platz für weitere Links, die nützlich sein könnten, um mehr über diese Technologie zu lernen, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken, etc.

### Struktur einer Schnittstellenseite

Nun sollten Sie bereit sein, Ihre Schnittstellenseiten zu schreiben. Jede Schnittstellen-Referenzseite sollte die folgende Struktur haben:

1. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in die erste Zeile jeder Schnittstellenseite ein, einschließlich des Namens der API als Argument, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu konstruieren, einschließlich Eigenschaften und Methoden, und anderer Schnelllinks, wie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Makro definiert (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen, oder einen neuen zu erstellen, falls sie dort nicht schon aufgelistet ist). Das Menü wird wie der untenstehende Screenshot aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro erzeugt werden](apiref-links.png)
2. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus angibt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird automatisch hinzugefügt, falls nötig. Um dies zu tun, müssen Sie [den Status im browser-compat-data repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
3. **Beschreibung**: Der erste Absatz der Schnittstellenseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Schnittstelle geben. Sie können auch ein oder zwei Absätze hinzufügen, wenn zusätzliche Beschreibungen erforderlich sind. Wenn die Schnittstelle tatsächlich ein Wörterbuch ist, sollten Sie diesen Begriff anstelle von "Schnittstelle" verwenden.
4. **Vererbungsdiagramm:** Verwenden Sie das [`\{{InheritanceDiagram}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/inheritance_diagram.rs) Makro, um ein SVG-Vererbungsdiagramm für die Schnittstelle einzubetten.
5. **Liste der Eigenschaften, Liste der Methoden**: Diese Abschnitte sollten "Eigenschaften" und "Methoden" betitelt werden und Links (mithilfe des \\{{domxref}} Makros) zu einer Referenzseite für jede Eigenschaft/Methode dieser Schnittstelle bieten, zusammen mit einer Beschreibung, was jede tut. Diese sollten mit [Beschreibung/Definition-Listen](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) ausgezeichnet werden. Jede Beschreibung sollte kurz und bündig sein — ein Satz, wenn möglich. Siehe den Abschnitt "Verweisen auf andere API-Funktionen mit dem \\{{domxref}} Makro" für eine schnellere Möglichkeit, Links zu anderen Seiten zu erstellen.

   Am Anfang beider Abschnitte, vor dem Anfang der Liste der Eigenschaften/Methoden, geben Sie die Vererbung anhand des richtigen Satzes an, in Kursivschrift:

   - _Diese Schnittstelle implementiert keine spezifischen Eigenschaften, erbt aber Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Eigenschaften von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle implementiert keine spezifischen Methoden, erbt aber Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._
   - _Diese Schnittstelle erbt auch Methoden von \\{{domxref("XYZ")}}, und \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Eigenschaften, die schreibgeschützt sind, sollten das \\{{ReadOnlyInline}}-Makro haben, das ein hübsches kleines "Read only"-Badge erstellt und auf derselben Zeile wie ihre \\{{domxref}}-Links eingeschlossen (nach der Verwendung der \\{{experimental_inline}}, \\{{non-standard_Inline}} und \\{{deprecated_inline}} Makros, falls einige dieser benötigt werden).

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, um die typische Verwendung einer Hauptfunktion der API zu zeigen. Anstatt ALLEN Code aufzulisten, sollten Sie einen interessanten Ausschnitt davon auflisten. Für eine vollständige Codeauflistung könnten Sie auf ein [GitHub](https://github.com/)-Repo verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit dem [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) Feature erstellt wurde (solange es nur clientseitigen Code verwendet natürlich). Wenn das Beispiel visuell ist, könnten Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Feature verwenden, um es live und auf der Seite spielbar zu machen.
7. **Spezifikationstabellen**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationstabelle" für mehr Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Polyfill**: Wenn passend, fügen Sie diesen Abschnitt hinzu und geben dabei Code für einen Polyfill an, der ermöglicht, die API auch auf Browsern zu verwenden, die sie nicht implementieren. Wenn kein Polyfill existiert oder benötigt wird, lassen Sie diesen Abschnitt vollständig weg.
10. **Siehe auch**: Die "Siehe auch"-Sektion ist ein guter Platz für zusätzliche Links, die nützlich sein könnten, um mehr über diese Technologie zu lernen, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken, etc. Wir haben eine liberale Richtlinie zum Verlinken zu externen Quellen, aber beachten Sie:

    - Schließen Sie keine Seiten mit denselben Informationen wie eine andere Seite in der MDN ein; verlinken Sie stattdessen auf diese Seite.
    - Nennen Sie keine Autorennamen — wir sind eine autoren-neutrale Dokumentationsseite. Verlinken Sie auf das Dokument; der Autorenname wird dort angezeigt.
    - Achten Sie besonders auf Blogposts: sie neigen dazu, veraltet zu werden (alte Syntax, falsche Kompatibilitätsinformationen). Verlinken Sie sie nur, wenn sie einen klaren Mehrwert bieten, der in einem gepflegten Dokument nicht zu finden ist.
    - Verwenden Sie keine Aktionsverben wie "Siehe … für mehr Informationen" oder "Klicken Sie auf …", Sie wissen nicht, ob Ihr Leser sehen oder auf den Link klicken kann (wie bei einer Papierausgabe des Dokuments).

#### Beispiele für Schnittstellenseiten

Die folgenden sind vorbildliche Beispiele von Schnittstellenseiten:

- [`Request`](/de/docs/Web/API/Request) von der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) von der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Eigenschaftsseite

Erstellen Sie Ihre Eigenschaftsseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Eigenschaftsseite, um als Grundlage für Ihre neue Seite zu dienen.

Bearbeiten Sie den Namen der Eigenschaftsseite, um dem `Interface.property_name`-Konvention zu folgen.

Eigenschaftsseiten müssen die folgenden Abschnitte haben:

1. **Titel**: Der Titel der Seite muss **InterfaceName.propertyName** sein. Der Schnittstellenname muss mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert ist, schließen wir `.prototype.` im Titel nicht ein, wie wir es im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in die erste Zeile jeder Eigenschaftsseite ein, einschließlich des Namens der API als Argument, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu konstruieren, einschließlich Eigenschaften und Methoden, und anderer Schnelllinks, wie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Makro definiert (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen, oder einen neuen zu erstellen, falls sie dort nicht schon aufgelistet ist). Das Menü wird wie der untenstehende Screenshot aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro erzeugt werden](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus angibt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird automatisch hinzugefügt, falls nötig. Um dies zu tun, müssen Sie [den Status im browser-compat-data repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Beschreibung**: Der erste Absatz der Eigenschaftsseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Eigenschaft geben. Sie können auch ein oder zwei Absätze hinzufügen, wenn zusätzliche Beschreibungen erforderlich sind. Offensichtlich zusätzliche Informationen, die Sie hinzufügen sollten, sind der Standard-/Anfangswert und ob sie schreibgeschützt ist oder nicht. Die Struktur des ersten Satzes muss folgendermaßen sein:

   - Für schreibgeschützte Eigenschaften
     - : Die **`InterfaceName.property`** schreibgeschützte Eigenschaft gibt ein \\{{domxref("type")}} zurück, das…
   - Für andere Eigenschaften
     - : Die **`InterfaceName.property`** Eigenschaft ist ein \\{{domxref("type")}}, das…

   > **Hinweis:** `InterfaceName.property` sollte in `<code>` sein und zusätzlich beim ersten Mal in fett (`<strong>`) sein, wenn es verwendet wird.

5. **Wert**: Der Wertabschnitt enthält eine Beschreibung des Wertes der Eigenschaft. Dies sollte den Datentyp der Eigenschaft und das, was sie repräsentiert, enthalten. Ein Beispiel finden Sie bei [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars).

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, um die typische Verwendung der betreffenden Eigenschaft zu zeigen. Sie sollten mit einem einfachen Beispiel beginnen, das zeigt, wie ein Objekt des Typs erstellt wird und wie Sie auf die Eigenschaft zugreifen können. Komplexere Beispiele können nach einem solchen Beispiel hinzugefügt werden. In diesen zusätzlichen Beispielen sollten Sie, anstatt ALLE Codes aufzulisten, einen interessanten Teil davon auflisten. Für eine vollständige Codeauflistung können Sie auf ein [GitHub](https://github.com/)-Repo verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit dem [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)-Feature erstellt wurde (solange es nur clientseitigen Code verwendet, natürlich). Wenn das Beispiel visuell ist, könnten Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Feature verwenden, um es live und auf der Seite spielbar zu machen.
7. **Spezifikationstabellen**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationstabelle" für mehr Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.
9. **Siehe auch**: Die "Siehe auch"-Sektion ist ein guter Platz für weitere Links, die nützlich sein könnten, wenn Sie diese Technologie verwenden: wie Methoden und Eigenschaften, die durch eine Änderung dieser Eigenschaft beeinflusst werden oder Ereignisse, die im Zusammenhang damit ausgelöst werden. Weitere Links, die nützlich sein könnten, um mehr über diese Technologie zu lernen, einschließlich MDN (und externer) Tutorials, Beispiele, Bibliotheken, … können hinzugefügt werden, obwohl es nützlich sein könnte, sie stattdessen auf der Schnittstellenreferenzseite zu betrachten.

#### Beispiele für Eigenschaftsseiten

Die folgenden sind vorbildliche Beispiele von Eigenschaftsseiten:

- [`Request.method`](/de/docs/Web/API/Request/method) von der [Fetch API](/de/docs/Web/API/Fetch_API).
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) von der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

### Struktur einer Methodenseite

Erstellen Sie Ihre Methodenseiten als Unterseiten der Schnittstelle, auf der sie implementiert sind. Kopieren Sie die Struktur einer anderen Methodenseite, um als Grundlage für Ihre neue Seite zu dienen.

Methodenseiten benötigen die folgenden Abschnitte:

1. **Titel**: Der Titel der Seite muss **InterfaceName.method()** sein (mit den beiden Klammern am Ende), aber der Slug (das Ende der Seiten-URL) muss die Klammern nicht enthalten. Außerdem muss der Schnittstellenname mit einem Großbuchstaben beginnen. Obwohl eine Schnittstelle in JavaScript auf dem Prototyp von Objekten implementiert ist, setzen wir `.prototype.` nicht in den Titel, wie wir es in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) tun.
2. **\\{{APIRef}}**: Fügen Sie das \\{{APIRef}}-Makro in die erste Zeile jeder Methodenseite ein, einschließlich des Namens der API als Argument, also zum Beispiel \\{{APIRef("Web Audio API")}}. Dieses Makro dient dazu, ein Referenzmenü auf der linken Seite der Schnittstellenseite zu konstruieren, einschließlich Eigenschaften und Methoden, und anderer Schnelllinks, wie im [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Makro definiert (bitten Sie jemanden, Ihre API zu einem bestehenden GroupData-Eintrag hinzuzufügen, oder einen neuen zu erstellen, falls sie dort nicht schon aufgelistet ist). Das Menü wird wie der untenstehende Screenshot aussehen.
   ![Dieser Screenshot zeigt ein vertikales Navigationsmenü für die OscillatorNode-Schnittstelle mit mehreren Unterlisten für Methoden und Eigenschaften, wie sie vom APIRef-Makro erzeugt werden](apiref-links.png)
3. **Funktionsstatus**: Ein [Banner, das den Funktionsstatus angibt](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (wie veraltet, nicht standardisiert oder experimentell) wird automatisch hinzugefügt, falls nötig. Um dies zu tun, müssen Sie [den Status im browser-compat-data repository aktualisieren](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Beschreibung**: Der erste Absatz der Methodenseite sollte eine kurze, prägnante Beschreibung des übergeordneten Zwecks der Methode geben. Sie können auch ein oder zwei Absätze hinzufügen, wenn zusätzliche Beschreibungen erforderlich sind. Offensichtlich zusätzliche Informationen, die hinzugefügt werden sollten, sind ihre Standardparameterwerte, jegliche Theorie, auf der die Methode basiert, und was die Parameterwerte bewirken.

   - Der Anfang des ersten Satzes muss der folgenden Struktur folgen:
     - : Die **`InterfaceName.method()`** Methode ...

   > **Hinweis:** `InterfaceName.method()` sollte in `<code>`, und sollte auch in fett (`<strong>`) beim ersten Mal sein, wenn es verwendet wird.

5. **Syntax**: Der Syntaxabschnitt sollte ein 2–3 Zeilen Beispiel enthalten — in der Regel nur Konstruktion der Schnittstelle, dann Aufruf der Schnittstellenmethode.

   - Die Syntax sollte von der Form sein:
     - : method(param1, param2, …)

   Der Syntaxabschnitt sollte drei Unterabschnitte enthalten (siehe [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) für ein Beispiel):

   - "Parameter": Dies sollte eine Definitionsliste (oder eine ungeordnete Liste) enthalten, die die verschiedenen Parameter der Methode benennt und beschreibt. Sie sollten das {{optional_inline}} Makro neben dem Parameternamen einfügen, im Falle optionaler Parameter. Wenn es keine Parameter gibt, sollte dieser Abschnitt weggelassen werden.
   - "Rückgabewert": Dies sollte sagen, welchen Rückgabewert die Methode hat, sei es ein einfacher Wert wie ein Double oder Boolean oder ein komplexerer Wert wie ein anderes Schnittstellenobjekt, in welchem Fall Sie das \\{{domxref}}-Makro verwenden können, um auf die MDN-API-Seite zu verweisen, die diese Schnittstelle behandelt (wenn sie existiert.) Eine Methode könnte nichts zurückgeben, in welchem Fall der Rückgabewert als "\\{{jsxref('undefined')}}" geschrieben werden sollte (was so in der gerenderten Seite aussieht: {{jsxref("undefined")}}).
   - "Ausnahmen": Dies sollte die verschiedenen Ausnahmen auflisten, die beim Aufrufen der Methode ausgelöst werden können, und unter welchen Umständen sie auftreten. Wenn es keine Ausnahmen gibt, sollte dieser Abschnitt weggelassen werden.

6. **Beispiele**: Fügen Sie eine Codeauflistung hinzu, um die typische Verwendung der betreffenden Methode zu zeigen. Anstatt ALLE Codes aufzulisten, sollten Sie einen interessanten Teil davon auflisten. Für eine vollständige Codeauflistung sollten Sie auf ein [GitHub](https://github.com/)-Repo verweisen, das das vollständige Beispiel enthält, und Sie könnten auch auf ein Live-Beispiel verlinken, das mit dem [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)-Feature erstellt wurde (solange es nur clientseitigen Code verwendet, natürlich). Wenn das Beispiel visuell ist, könnten Sie auch das MDN [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Feature verwenden, um es live und auf der Seite spielbar zu machen.
7. **Spezifikationstabellen**: An diesem Punkt müssen Sie eine Spezifikationstabelle einfügen — siehe den Abschnitt "Erstellen einer Spezifikationstabelle" für mehr Details.
8. **Browser-Kompatibilität**: Jetzt müssen Sie eine Browser-Kompatibilitätstabelle einfügen. Siehe [Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Details.

#### Beispiele für Methodenseiten

Die folgenden sind vorbildliche Beispiele von Methodenseiten:

- [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) von der [Web Animations API](/de/docs/Web/API/Web_Animations_API).
- [`fetch()`](/de/docs/Web/API/Window/fetch) von der [Fetch API](/de/docs/Web/API/Fetch_API).

## Seitenleisten

Sobald Sie Ihre API-Referenzseiten erstellt haben, möchten Sie die richtigen Seitenleisten darauf einfügen, um die Seiten miteinander zu verbinden. Unser [API-Referenzseitenleisten-Guide](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) erklärt wie.
