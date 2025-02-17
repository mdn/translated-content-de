---
title: Anleitung zum Schreiben eines API-Referenzdokuments
short-title: Schreiben einer API-Referenz
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Dieser Leitfaden führt Sie durch alles, was Sie wissen müssen, um eine API-Referenz auf MDN zu schreiben.

## Vorbereitung

Bevor Sie mit der Dokumentation einer API beginnen, gibt es einige Dinge, die Sie vorbereiten und im Voraus planen sollten, bevor Sie tatsächlich mit dem Schreiben beginnen.

### Vorausgesetztes Wissen

Es wird angenommen, dass Sie vor dem Lesen dieses Leitfadens über grundlegende Kenntnisse in folgenden Themen verfügen:

- Webtechnologien wie HTML, CSS und JavaScript. JavaScript ist dabei am wichtigsten.
- Verständnis und Lesen von Webtechnologie-Spezifikationen. Diese werden Sie häufig benötigen, während Sie APIs dokumentieren.

Alles andere kann unterwegs erlernt werden.

### Erforderliche Ressourcen

Bevor Sie mit der Dokumentation einer API beginnen, sollten Sie folgende Dinge zur Verfügung haben:

1. Die neueste Spezifikation:
   Ob es sich um eine W3C-Empfehlung oder einen frühen Entwurf eines Editors handelt, Sie sollten sich auf den neuesten verfügbaren Entwurf der Spezifikation beziehen, die die API abdeckt.
   Sie können diesen üblicherweise durch eine Websuche finden. Die neueste Version ist oft in einer Liste unter „LATEST DRAFT“ o. Ä. verlinkt.
2. Die neuesten modernen Web-Browser:
   Diese sollten experimentelle/Alpha-Builds sein, wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/en/chrome/canary/), die wahrscheinlich die von Ihnen zu dokumentierenden Features unterstützen.
   Dies ist besonders wichtig, wenn Sie eine neue/experimentelle API dokumentieren.
3. Demos/Blogposts/weitere Informationen: Sammeln Sie so viele Informationen wie möglich.
4. Nützliche technische Kontakte:
   Es ist hilfreich, einen freundlichen technischen Kontakt zu finden, um Fragen zur Spezifikation zu stellen, jemanden, der an der Standardisierung der API beteiligt ist oder an deren Implementierung in einem Browser arbeitet.
   Gute Orte, um solche Kontakte zu finden, sind:

   - Das interne Firmenadressbuch, falls Sie für ein relevantes Unternehmen arbeiten.
   - Eine öffentliche Mailingliste, die sich mit der Diskussion dieser API befasst, wie Mozillas [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) oder eine W3C-Liste wie [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - Die Spezifikation selbst. Zum Beispiel listet die [Web Audio API-Spezifikation](https://webaudio.github.io/web-audio-api/) die Autoren und ihre Kontaktdaten oben auf.

### Nehmen Sie sich Zeit, um mit der API zu spielen

Während der Dokumentation einer API werden Sie häufig Demos erstellen. Es ist jedoch sinnvoll, zunächst Zeit zu investieren, um sich mit der Funktionsweise der API vertraut zu machen — lernen Sie die Hauptinterfaces/-Eigenschaften/-Methoden kennen, die primären Anwendungsfälle und wie Sie einfache Funktionen damit schreiben können.

Wenn eine API geändert wurde, müssen Sie darauf achten, dass vorhandene Demos, auf die Sie sich beziehen oder von denen Sie lernen, nicht veraltet sind. Überprüfen Sie die Hauptstrukturen, die in der Demo verwendet werden, um sicherzustellen, dass sie der neuesten Spezifikation entsprechen. Sie könnten auch nicht in aktuellen Browsern funktionieren, aber dies ist kein sehr verlässlicher Test, da alte Features oft aus Gründen der Abwärtskompatibilität weiterhin unterstützt werden.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde, z. B. eine Methode jetzt anders definiert ist, aber die alte Methode weiterhin in Browsern funktioniert, müssen Sie beide Versionen oft an derselben Stelle dokumentieren, sodass alte und neue Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, ziehen Sie Demos heran, die Sie gefunden haben, oder fragen Sie einen technischen Kontakt.

### Erstellen Sie eine Liste der benötigten Dokumente

Eine API-Referenz enthält in der Regel die folgenden Seiten.
Details, Beispiele und Vorlagen, was jede Seite enthält, finden Sie in unserem Artikel [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types).
Bevor Sie beginnen, sollten Sie eine Liste aller Seiten erstellen, die Sie anlegen müssen.

1. Übersichtsseite
2. Interface-Seiten
3. Konstruktor-Seiten
4. Methoden-Seiten
5. Eigenschafts-Seiten
6. Ereignisse-Seiten
7. Konzept-/Leitfaden-Seiten
8. Beispiele

> [!NOTE]
> In diesem Artikel beziehen wir uns auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) als Beispiel.

#### Übersichtsseiten

Eine einzelne API-Übersichtsseite beschreibt die Rolle der API, ihre obersten Interfaces, verwandte Funktionen, die in anderen Interfaces enthalten sind, sowie andere Details auf hoher Ebene.
Der Name und der Slug der Seite sollten der Name der API mit „API“ am Ende sein. Sie befindet sich auf oberster Ebene der API-Referenz, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiel:

- Titel: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API](/de/docs/Web/API/Web_Audio_API)

#### Interface-Seiten

Jedes Interface hat ebenfalls eine eigene Seite, die den Zweck des Interfaces beschreibt, alle Mitglieder (Konstruktoren, Methoden, Eigenschaften usw., die sie enthält) auflistet und zeigt, mit welchen Browsern es kompatibel ist.
Der Name und der Slug einer Seite sollten dem Namen des Interfaces entsprechen, genau wie in der Spezifikation geschrieben.
Jede Seite wird auf der obersten Ebene der API-Referenz platziert, als Kind von [https://developer.mozilla.org/de/docs/Web/API](/de/docs/Web/API).

Beispiele:

- Titel: _AudioContext_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext](/de/docs/Web/API/AudioContext)

<!---->

- Titel: _AudioNode_
- Slug: _AudioNode_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioNode](/de/docs/Web/API/AudioNode)

> [!NOTE]
> Jedes Mitglied des Interfaces wird dokumentiert. Beachten Sie dabei die folgenden Regeln:

- Methoden, die auf der Prototyp-Klasse eines Interface-Objekts definiert sind (Instanzmethoden), und Methoden, die auf der eigentlichen Klasse selbst definiert sind (statische Methoden), werden dokumentiert.
  Wenn beide selten auf demselben Interface existieren, sollten Sie sie in separaten Abschnitten auf der Seite auflisten (statische Methoden/Instanzmethoden).
  Üblicherweise existieren nur Instanzmethoden, in diesem Fall können Sie diese unter dem Titel „Methoden“ zusammenfassen.
- Geerbte Eigenschaften und Methoden des Interfaces werden nicht dokumentiert: Sie werden im jeweiligen übergeordneten Interface aufgelistet. Allerdings wird auf ihre Existenz hingewiesen.
- Eigenschaften und Methoden, die in Mixins definiert sind, werden dokumentiert. Weitere Details finden Sie im [Beitrags-Leitfaden für Mixins](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins).
- Spezielle Methoden wie der Stringifier (`toString()`) und der Jsonifier (`toJSON()`) werden ebenfalls aufgeführt, wenn sie existieren.
- Benannte Konstruktoren (wie `Image()` für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)) werden ebenfalls aufgeführt, falls relevant.

#### Konstruktor-Seiten

Jedes Interface besitzt null oder einen Konstruktor, der auf einer Unterseite der Interface-Seite dokumentiert ist. Es beschreibt den Zweck des Konstruktors und zeigt dessen Syntax, Anwendungsbeispiele, Browser-Kompatibilitätsinformationen usw. Sein Slug ist der Name des Konstruktors, der genau dem Interface-Namen entspricht, und der Titel ist Interface-Name, Punkt, Konstruktor-Name, dann Klammern am Ende.

Beispiel:

- Titel: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/AudioContext](/de/docs/Web/API/AudioContext/AudioContext)

#### Eigenschaftsseiten

Jedes Interface besitzt null oder mehr Eigenschaften, die auf Unterseiten der Interface-Seite dokumentiert sind. Jede Seite beschreibt den Zweck der Eigenschaft und zeigt deren Syntax, Nutzungsbeispiele, Browser-Kompatibilitätsinformationen usw. Der Slug ist der Name der Eigenschaft, der Titel ist Interface-Name, Punkt, dann Eigenschaftsname.

Beispiele:

- Titel: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/state](/de/docs/Web/API/BaseAudioContext/state)

<!---->

#### Methoden-Seiten

Jedes Interface besitzt null oder mehr Methoden, die auf Unterseiten der Interface-Seite dokumentiert sind. Jede Seite beschreibt den Zweck der Methode und zeigt deren Syntax, Dateibeispiele, Browser-Kompatibilitätsinformationen usw. Der Slug entspricht dem Namen der Methode, und der Titel ist Interface-Name, Punkt, Methodenname, dann Klammern.

Beispiele:

- Titel: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/close](/de/docs/Web/API/AudioContext/close)

<!---->

- Titel: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/de/docs/Web/API/AudioContext/createGain](/de/docs/Web/API/BaseAudioContext/createGain)

[Die Übersetzung wird fortgesetzt, erforderlichenfalls ergänzen Sie die Inhalte].
