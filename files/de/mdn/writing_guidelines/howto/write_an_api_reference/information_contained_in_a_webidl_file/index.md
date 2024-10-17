---
title: Informationen, die in einer WebIDL-Datei enthalten sind
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{MDNSidebar}}

Beim Verfassen von Dokumentationen über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden soll und auch das Modell, während die Implementierungen beschreiben, was tatsächlich in den Browsern umgesetzt wurde. WebIDL-Dateien sind eine sehr kompakte Möglichkeit, viele, aber nicht alle, Informationen über die API zu vermitteln. Dieses Dokument bietet eine Referenz zum Verständnis der WebIDL-Syntax.

IDL steht für **_Interface Definition Language_** und ist dazu gedacht, APIs zu beschreiben. In der Computerwelt gibt es mehrere Arten von IDL. In der Browserwelt wird die IDL, die wir verwenden, _WebIDL_ genannt. Es gibt zwei Arten von WebIDL: Die in der WebIDL-Spezifikation angegebene und die in Browsern implementierte. Die Spezifikation ist die kanonische Referenz, und die Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist und enthält zusätzliche Dinge wie Anmerkungen, Informationen über nicht standardmäßige Elemente und browserspezifische Erweiterungen der IDL-Spezifikation.

## Wo WebIDL-Dateien zu finden sind

WebIDL kann an verschiedenen Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr bequeme Möglichkeit, präzise Definitionen zu vermitteln. Diese beschreiben die Syntax der API. Aber denken Sie daran, dass sie von der tatsächlichen Implementierung abweichen können. Auf MDN möchten wir das dokumentieren, was die Webplattform wirklich ist, nicht, wie sie idealerweise sein sollte. Überprüfen Sie daher, was dort im Vergleich zu den Implementierungen vorhanden ist (und zögern Sie nicht, Fehler zu melden, wenn Sie Unstimmigkeiten entdecken).
- Drei Browser-Engines verwenden (modifiziertes) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Vor-Chromium-Versionen von Edge verwendeten es intern, aber diese sind leider nicht öffentlich.

  - Für Gecko sind alle WebIDL-Dateien in einem einzigen Verzeichnis gruppiert: <https://searchfox.org/mozilla-central/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellcodebaum, aber diese sind nicht WebIDL, daher können Sie sie ignorieren. Ältere Versionen von Gecko haben einige ihrer WebIDL-Dateien etwas verstreut und verwenden möglicherweise Mozillas IDL anstelle von WebIDL, um einige Webschnittstellen zu beschreiben, aber dies wird in keinem aktuellen Gecko-Code ein Problem darstellen.
  - Für Chromium befinden sie sich an zwei Orten, beide Teilbäume des Quellcodes im Verzeichnis [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/): [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Chromium-Quellcode hat IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und im Zusammenhang mit API-Implementierungen nicht relevant.
  - Für WebCore sind sie im Quellcode verstreut, daher müssen Sie etwas mehr graben: Z.B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Es wurde jedoch so entworfen, dass es erweitert werden kann, um mehr Informationen zu vermitteln, und Browser-Anbieter haben dies getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDL erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple auch eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt zur Verfügung gestellt.

> [!NOTE]
> Wir beschreiben hier nur den Teil von WebIDL, der beim Verfassen von Dokumentationen am nützlichsten ist. Es gibt viele weitere Anmerkungen, die für Implementierer nützlich sind; wenden Sie sich an die vier oben verlinkten Dokumente, um einen vollständigen Überblick zu erhalten.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die allgemeine API-Funktionen beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist der String, der nach dem Schlüsselwort `interface` und vor der nächsten öffnenden geschweiften Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, auf der jeder Konstruktor, jede Eigenschaft und jede Methode aufgelistet ist, die dafür definiert sind.

### Vererbungskette

Der Elternteil einer gegebenen Schnittstelle wird nach dem Schnittstellennamen, nach einem Doppelpunkt (`':'`), definiert. Es kann nur einen Elternteil pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste (unter Verwendung des \\{{APIRef}}-Makros) aufgelistet. Sie kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden stehen mehreren Schnittstellen zur Verfügung. Um eine Neudefinition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen, den sogenannten _Mixins_, definiert.

Seit September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin`, um eine Mixin-Schnittstelle zu definieren, etwa so:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Dann verwenden Sie das Schlüsselwort `includes`, um zu sagen, dass die innerhalb eines Mixins definierten Eigenschaften in einer Schnittstelle verfügbar sind:

```webidl
MyInterface includes MyMixin;
```

Mixins haben keine Vererbung und können keine anderen Mixins einschließen. Sie unterstützen jedoch Partials, sodass Sie Dinge wie dieses sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke verbirgt MDN Mixins. Sie sind abstrakte und spezifikationsbezogene Konstrukte. Man kann sie nicht in der Browserkonsole sehen und es ist nützlicher zu wissen, auf welchen realen Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie in der IDL auf ein Mixin wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils) stoßen, suchen Sie nach den Schnittstellen, die das Mixin implementieren, wie z.B. [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass anstelle der Dokumentation von `HTMLHyperlinkElementUtils`, die Dokumentation zu den konkreten Schnittstellen hinzugefügt wird, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Siehe die folgenden beiden Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenleitlinien für Mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die man noch an einigen Stellen finden könnte, werden Mixins mit der Annotation `[NoInterfaceObject]` vorangestellt:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf einer Schnittstelle implementiert werden, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in Fenster und Workern

Die Verfügbarkeit in Web Workern (jeglicher Art) und im Window-Scope wird durch eine Annotation definiert: `[Exposed=(Window,Worker)]`. Die Anmerkung gilt für die Partial-Schnittstelle, mit der sie aufgelistet ist.

```webidl
[Exposed=(Window,Worker)]
interface Performance {
   [DependsOn=DeviceState, Affects=Nothing]
   DOMHighResTimeStamp now();
};

[Exposed=Window]
partial interface Performance {
   [Constant]
   readonly attribute PerformanceTiming timing;
   [Constant]
   readonly attribute PerformanceNavigation navigation;

   jsonifier;
};
```

In diesem Fall ist `Performance.now()` im `Window`-Scope und für jeden Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Web Worker verfügbar sind.

Die häufigsten Werte für `[Exposed]` sind:

- `Window`
  - : Die Partial-Schnittstelle ist im globalen [`Window`](/de/docs/Web/API/Window)-Scope verfügbar.
- `Worker`
  - : Die Partial-Schnittstelle ist für jede Art von Worker verfügbar, das heißt, wenn der globale Scope ein Nachkomme von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Es ist auch für `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar sind und intern in Firefox verwendet werden.)
- `DedicatedWorker`
  - : Die Partial-Schnittstelle ist nur für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die Partial-Schnittstelle ist nur für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die Partial-Schnittstelle ist nur für den [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein weiterer Wert ist möglich, wie `System`, aber dies hat eine [besondere Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]`-Anmerkung haben. Das bedeutet, dass, wenn ein Objekt dieses Typs als globaler Scope verwendet wird, jede Schnittstelle, Eigenschaft oder Methode, die `xyz` als Wert von `[Exposed]` verwendet, verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier wird definiert, dass, wenn der globale Scope vom Typ `DedicatedWorkerGlobalScope` ist, das heißt, wenn wir in einem dedizierten Worker sind, jede Schnittstelle, Eigenschaft oder Methode, die für `Worker` oder `DedicatedWorker` unter Verwendung der `[Exposed]`-Anmerkung nutzbar ist, verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt zur Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer Partial-Schnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden, durch eine Präferenz (normalerweise als "pref" bezeichnet) kontrolliert werden. Dies wird auch im WebIDL markiert.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier kontrolliert `media.webspeech.synth.enabled` die `SpeechSynthesis`-Schnittstelle und deren Eigenschaften (das vollständige Listing hat mehr als 3).

> [!NOTE]
> Der Standardwert der Präferenz ist direkt im WebIDL nicht verfügbar (er kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein).

### Nur im Systemcode verfügbar

Einige Schnittstellenmerkmale sind möglicherweise nur im internen Systemcode des Browsers oder im Chrome-Code verfügbar. Um dies zu kennzeichnen, verwenden wir in Gecko \[ChromeOnly], zum Beispiel ist die Eigenschaft `propName` im folgenden Beispiel nur über den Chrome-Code aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Sie können die Definition einer Eigenschaft am Vorhandensein des Schlüsselworts `attribute` erkennen.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in der Dokumentation wird darauf als `HTMLMediaElement.error` verwiesen, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite wird entweder **mit** dem Schnittstellen-Präfix unter Verwendung \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix unter Verwendung \\{{domxref('HTMLMediaElement.error', 'error')}} vorgenommen, wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt des Typs `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass es den Wert `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies der Fall sein kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _Erweiterten Attribut_ versehen sein, einem in eckigen Klammern eingeschlossenen String (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute weisen auf spezielle Verhaltensweisen hin, die im Text beschrieben werden müssen. Hier ist eine Liste standardmäßiger erweiterter Attribute von Typen und der Ergänzungen, die vorgenommen werden müssen:

- `[LegacyNullToEmptyString]`

  - : Der `null`-Wert wird auf nicht standardisierte Weise in eine Zeichenkette konvertiert. Der Standardweg ist, ihn in die Zeichenkette `"null"` zu konvertieren, aber in diesem Fall wird er in `""` konvertiert.

    Ergänzen Sie den folgenden Satz am Ende des _Wert_-Abschnitts des Artikels:

    _Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichwertig ist mit `elt.innerHTML = ""`._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibrechte auf die Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht geändert werden. Es muss als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}}-Makro neben dem Definitionsterm hinzugefügt wird.
- Im ersten Satz seiner eigenen Seite, indem die Beschreibung mit: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_ beginnt.
- Indem die Beschreibung in der Schnittstellenseite mit _Gibt zurück…_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als 'rückgebend' eines Wertes beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert festzulegen.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie wenn einige Werte illegal sind, kann das Setzen eines neuen Wertes dazu führen, dass eine Ausnahme ausgelöst wird. Dies wird durch die `[SetterThrows]`-Anmerkung gekennzeichnet. Wenn dies der Fall ist, muss der Syntax-Abschnitt der Seiteneigenschaft einen Abschnitt Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, werden, als Textinformation, in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit gekennzeichnet sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen illegalen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (zugeordnet zu einem JavaScript {{jsxref('String')}}) festzulegen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Es ist selten, dass Getter Ausnahmen auslösen, obwohl es in wenigen Fällen vorkommt. In diesem Fall wird die `[GetterThrows]`-Anmerkung verwendet. Auch hier muss der Syntax-Abschnitt der Seiteneigenschaft einen Abschnitt Ausnahmen haben.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Nicht auslösende Ausnahmen

Wenn die Semantik von WebIDL nicht befolgt wird, wird oft eine Ausnahme ausgelöst, selbst ohne `[SetterThrows]` oder `[GetterThrows]`. Zum Beispiel, im strikten Modus, wenn wir versuchen, eine schreibgeschützte Eigenschaft auf einen neuen Wert zu setzen, das heißt, seinen impliziten Setter aufzurufen, wird eine schreibgeschützte Eigenschaft im strikten Modus ausgelöst.

Hauptsächlich aus Kompatibilitätsgründen ist dieses Verhalten manchmal störend. Um dies zu verhindern, indem ein No-Op-Setter erstellt wird (das heißt, indem jeder Versuch, die Eigenschaft auf einen neuen Wert festzulegen, stillschweigend ignoriert wird), kann die `[LenientSetter]`-Anmerkung verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird dem Beschreibungstext der Eigenschaft ein zusätzlicher Satz hinzugefügt. Beispielsweise:

_Obwohl diese Eigenschaft schreibgeschützt ist, wird keine Ausnahme ausgelöst, wenn sie geändert wird (sogar im strikten Modus); der Setter ist eine No-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz auf ein internes Objekt sein.

Grundobjekte mit Typen wie {{jsxref("String")}} (als IDL `DOMString` oder ähnlich), {{jsxref("Number")}} (als IDL `byte`, `octet`, `unsigned int` oder ähnlich) und {{jsxref("Boolean")}} werden immer kopiert und es muss nichts Spezielles darüber vermerkt werden (es ist ein natürliches Verhalten, das von einem JavaScript-Entwickler erwartet wird).

Für Schnittstellenobjekte ist es standardmäßig, eine _Referenz_ auf das interne Objekt zurückzugeben. Dies muss sowohl in der Kurzbeschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, gilt für die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, selbst wenn sie in der relevanten Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dies wird im WebIDL mittels der `[NewObject]`-Anmerkung angezeigt.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: Wenn man es ändert, ändert man nicht den internen Wert, und eine Änderung im internen Wert beeinflusst nicht jede Objektinstanz. In der Dokumentation wird dies durch das Adjektiv _neu_ neben dem Objekt markiert:

_Die **`HTMLMediaElement.buffered`**-Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Fall einer Referenz auf ein Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir explizit, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sein werden. Um dies zu markieren, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollection` oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch in der Unterseite.

Beispiel:

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine Live \\{{domxref("HTMLFormControlsCollection")}} zurück, die ...

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Eigenschaften in Workern lässt sich auch im WebIDL finden. Für eine Eigenschaft gilt standardmäßig die gleiche Verfügbarkeit wie für die `interface` (das heißt, nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar, wenn nichts Besonderes markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation sollte die Unterseite einen Satz enthalten, der angibt, ob sie in Web Workern verfügbar ist oder nicht, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt zur Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies wird auch im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die `textTracks`-Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist direkt im WebIDL nicht verfügbar (er kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein).

## Methoden

Eine Methode erkennt man an dem Vorhandensein von Klammern nach dem Namen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und in der Dokumentation wird darauf als `HTMLMediaElement.canPlayType()` (mit den Klammern, die anzeigen, dass es sich um eine Methode handelt) verwiesen, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite wird entweder **mit** dem Schnittstellen-Präfix unter Verwendung \\{{domxref('HTMLMediaElement.canPlayType()')}} oder **ohne** das Präfix unter Verwendung \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} vorgenommen, wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer enthalten sein.

### Parameter

```js
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode werden im Syntax-Abschnitt der Unterseite der Methode aufgelistet. Sie sind im WebIDL in Reihenfolge als kommagetrennte Liste zwischen den Klammern aufgelistet. Jeder Parameter hat einen Namen (wie oben angegeben) und einen Typ (z. B. ein `'?'` bedeutet, dass der `null`-Wert gültig ist). Wenn mit `optional` gekennzeichnet, ist der Parameter optional in einen Methodenaufruf einzuschließen und muss das \\{{OptionalInline}}-Flag beinhalten, wenn er im Syntax-Abschnitt aufgeführt wird. Der Standardwert des Parameters wird nach dem Gleichheitszeichen (`'='`) aufgelistet.

Parameterarten können spezielle Verhaltensweisen haben, die mit erweiterten Attributen beschrieben werden (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und der Ergänzung, die Sie im Text vornehmen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie am Ende der Beschreibung des Parameters den folgenden Satz hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie die leere Zeichenkette (`""`)._

### Typ des Rückgabewertes

```webidl
DOMString canPlayType(DOMString type);
```

Der Typ des Rückgabewertes ist vor dem Methodennamen angegeben – im obigen Fall handelt es sich um ein Objekt vom Typ `DOMString`. Wenn der Rückgabetyp von einem Fragezeichen (`'?'`) gefolgt wird, kann ebenfalls ein Wert von `null` zurückgegeben werden und die Dokumentation muss erklären, _wann_ dies der Fall sein kann. Ist kein Fragezeichen vorhanden, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das `void`-Schlüsselwort ist, bedeutet dies, dass kein Rückgabewert existiert. Es ist kein Rückgabewert Typ. Wenn im WebIDL-Eintrag `void` steht, sollte der _Rückgabewert_-Abschnitt in den Docs einfach "None (\{{jsxref("undefined")}})." angeben.

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird durch die `[Throws]`-Anmerkung markiert. Wenn dies der Fall ist, muss der Syntax-Abschnitt der Methoden-Seite einen Abschnitt Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind im Text der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit gekennzeichnet sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen illegalen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (zugeordnet zu einem JavaScript {{jsxref('String')}}) als Parameter festzulegen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Sehen Sie sich einen dieser [_Ausnahmen_ Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Methoden in Web Workern lässt sich auch im WebIDL finden. Für eine Methode ist der Standard die gleiche Verfügbarkeit wie für die `interface` (das heißt, nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar, wenn nichts Besonderes markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation sollte die Unterseite einen Satz enthalten, der angibt, ob sie in Web Workern verfügbar ist, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt zur Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies wird auch im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die Methode `addTextTrack()`.

> [!NOTE]
> Der Standardwert der Präferenz ist im WebIDL nicht direkt verfügbar (er kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein).

## Spezielle Methoden

Einige Methoden werden nicht als reguläre Methoden in WebIDL aufgelistet, sondern als spezielle Schlüsselwörter, die in spezielle Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifizierer gibt an, wie ein Objekt basierend auf einer Schnittstelle in Kontexten, die eine Zeichenkette erwarten, aufgelöst wird. (Siehe den Abschnitt [Stringifiers](#stringifizierer).) Zusätzlich wird das Schlüsselwort auf `toString()` abgebildet und definiert als:

```webidl
stringifier;
```

Die `toString()`-Methode wird wie jede andere Methode der Schnittstelle aufgeführt und hat ihre eigene Unterseite (z. B. [`Range.toString()`](/de/docs/Web/API/Range/toString))

Ein Jsonifier wird auf `toJSON()` abgebildet und definiert als:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()`-Methode wird wie jede andere Methode der Schnittstelle aufgeführt und hat ihre eigene Unterseite (z. B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON))

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur der nicht standardisierte wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterable_ definiert werden, was bedeutet, dass sie die folgenden Methoden haben wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei mögliche Iterationsarten: den _Wert-Iterator_ und den _Paar-Iterator_.

#### Wert-Iterator

```webidl
iterable<valueType>
```

Der Iterator iteriert über Werte des Typs _valueType_. Die generierten Methoden sind:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes (die `unsigned long` sind) zurückgibt.
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt.
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel, das sind seine Indizes (`unsigned long`) zurückgibt. Im Fall von Wert-Iterators sind `keys()` und `entries()` identisch.
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung hinzu.

Die Werte, über die iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, unter Verwendung der `iterable<valueType>`-Notation. Zum Beispiel siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit in der WebIDL-Datei, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angezeigt, wenn die Schnittstelle `getter`-Methoden mit einem Parameter vom Typ `unsigned long` umfasst.
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text findet sich typischerweise in der Spezifikation und beginnt in der Regel mit: _"The [values to iterate over](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator iteriert über Werte des Typs _valueType_ mit Schlüsseln des Typs _keyType_, das heißt die Wertepaaren. Die generierten Methoden sind:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Wertepaaren zurückgibt. Beispiel, siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Beispiel, siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Beispiel, siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Beispiel, siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung hinzu. Beispiel: [`FormData`](/de/docs/Web/API/FormData).

Die Wertepaaren, über die iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, mit der `iterable<keyType, valueType>`-Notation. Beispiel, siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text wird typischerweise in der Spezifikation gefunden und beginnt in der Regel mit: _"The [value pairs to iterate over](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Set-ähnliche Methoden

Eine Schnittstelle kann als _set-like_ definiert werden, was bedeutet, dass sie eine _geordneten Menge von Werten_ darstellt, die die folgenden Methoden hat: `entries()`, `keys()`, `values()`, `forEach()` und `has()` (sie hat auch die `size`-Eigenschaft). Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Der set-like kann mit readonly oder nicht festgelegt werden. Wenn er nicht schreibgeschützt ist, sind auch die Methoden für die Änderung der Menge implementiert: `add()`, `clear()` und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften sind:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes zurückgibt. Beispiel, siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Beispiel, siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Beispiel, siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Beispiel, siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die Set-like-Deklaration nicht von readonly vorangestellt ist, werden auch die folgenden Methoden generiert:

- `add()`, die einen Eintrag hinzufügt. Beispiel die `.add()`-Methode der [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()`, die die set-like-Struktur leert. Beispiel die `.clear()`-Methode der [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()`, die einen Eintrag entfernt. Beispiel die `.delete()`-Methode der [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche Satzschnittstelle ermöglicht auch die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`.

## Besondere Verhaltensweisen

Einige IDL-Mitglieder zeigen spezielle Verhaltensweisen an, die auf den entsprechenden Seiten beschrieben werden sollten.

### Stringifizierer

Zusätzlich zur Hinzufügung der Methode `toString()` zu einer Schnittstelle, wie in [toString() und toJSON()](#tostring_and_tojson) beschrieben, geben Stringifizierer auch an, dass eine Objektinstanz, bei Verwendung als Zeichenkette, eine andere Zeichenkette als die Standardeinstellung zurückgibt. (Das Standardverhalten ist normalerweise eine JSON-Darstellung des Objekts). Wie genau hängt davon ab, wie es in der IDL angegeben ist. Unabhängig vom "wie" sollte das nicht standardmäßige Verhalten auf der Schnittstellenseite beschrieben werden.

Wenn das Schlüsselwort `stringifier` von einem Attributnamen begleitet wird, hat das Referenzieren des Objektnamens das gleiche Ergebnis wie das Referenzieren des Attributnamens. Betrachten Sie das folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse basierend auf diesem Interface sind die folgenden Codezeilen gleichwertig. Das Verhalten sollte sowohl auf der Eigenschaftsseite als auch auf der Schnittstellenseite notiert werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das Schlüsselwort `stringifier` alleine verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten ist im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu erfahren, was eine Schnittstellenreferenz tatsächlich macht, verweisen Sie auf die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe festzustellen.

## Konstruktoren

Konstruktoren sind im WebIDL etwas versteckt: Sie sind als Anmerkungen der Hauptschnittstelle aufgeführt.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer bestimmten Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit derselben Schnittstelle wird mit der `Constructor`-Anmerkung auf der Schnittstelle definiert. Es kann Klammern und eine Liste von Parametern enthalten oder nicht (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel erhält das obige den Slug _Web/API/MessageChannel/MessageChannel_ und den Titel `MessageChannel()`.

Ein weiteres Beispiel für einen unbenannten Konstruktor mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es kann auch mehrere unbenannte Konstruktoren geben, die sich durch ihre Parameterlisten unterscheiden. Alle Syntax wird in einer einzigen Unterseite dokumentiert.

```webidl
[Constructor(DOMString url, URL base),
 Constructor(DOMString url, optional DOMString base),
 Exposed=(Window,Worker)]
    interface URL {};
```

### Benannte Konstruktoren

```webidl
[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
    interface HTMLImageElement : HTMLElement {…
```

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen hat als seine Schnittstelle. Zum Beispiel erzeugt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL mit der `NamedConstructor`-Anmerkung auf der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und dem Parameter innerhalb der Klammern, im gleichen Format, wie man es bei Methoden sieht.

Es kann mehrere benannte Konstruktoren für eine bestimmte Schnittstelle geben, aber dies ist äußerst selten; in einem solchen Fall beinhalten wir eine Unterseite pro Name.

### Neue Konstruktorsyntax

Seit September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax betrifft keine erweiterte Attributanmerkung mehr auf der Schnittstelle:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax namens `constructor` ohne explizit definierten Rückgabetyp, geschrieben wie folgt:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Das bedeutet, dass erweiterte Attribute jetzt auf den Konstruktor angewendet werden können, und es wird nicht mehr angenommen, dass alle Konstruktoren eine Ausnahme auslösen. Wenn ein Konstruktor eine Ausnahme auslöst, wird `[Throws]` verwendet, um dies anzuzeigen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen auf die neue Syntax aktualisiert werden, daher werden Sie wahrscheinlich beiden in freier Wildbahn begegnen. Wir werden daher beide Arten von Syntax hier weiterhin abdecken.

### Verfügbarkeit in Workern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle oder Partial-Schnittstelle, auf der sie definiert sind. Die Unterseite gibt diese Information auf die gleiche Weise wie bei einer Methode an.

### Präferenzen

Konstruktoren werden durch die gleiche Präferenz gesteuert wie die Schnittstelle oder Partial-Schnittstelle, auf der sie definiert sind. Die Unterseite gibt diese Information auf die gleiche Weise wie bei einer Methode an.
