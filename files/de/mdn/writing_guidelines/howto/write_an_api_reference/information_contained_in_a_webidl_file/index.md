---
title: Informationen, die in einer WebIDL-Datei enthalten sind
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Beim Verfassen von Dokumentationen über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte, ebenso wie das Modell, und die Implementierungen beschreiben, was tatsächlich in die Browser integriert wurde. WebIDL-Dateien sind eine sehr komprimierte Möglichkeit, viele, aber nicht alle Informationen über die API zu vermitteln. Dieses Dokument bietet eine Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist darauf ausgelegt, APIs zu beschreiben. In der weiten Welt der Informatik gibt es mehrere Arten von IDL. In der Welt der Browser wird die von uns verwendete IDL _WebIDL_ genannt. Es gibt zwei Arten von WebIDL: die in der WebIDL-Spezifikation spezifizierte, und die in Browsern implementierte. Die Spezifikation ist die maßgebliche Referenz, während das Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist, und zusätzliche Dinge wie Annotations, Informationen über nicht standardisierte Elemente und browserspezifische Erweiterungen der IDL-Spezifikation enthält.

## Wo Sie WebIDL-Dateien finden

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL innerhalb des Textes: Es ist eine sehr praktische Möglichkeit, präzise Definitionen zu vermitteln. Diese beschreiben die Syntax der API. Obwohl die kanonische Referenz, müssen wir im Hinterkopf behalten, dass sie von der tatsächlichen Implementierung abweichen können. Auf MDN möchten wir praktisch sein und dokumentieren, was die Webplattform wirklich ist und nicht, was sie idealerweise sein sollte. Überprüfen Sie also, was dort mit Implementierungen vorhanden ist (und zögern Sie nicht, Fehler zu melden, wenn Sie Inkonsistenzen entdecken).
- Drei Browser-Engines verwenden (modifizierte) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Pre-Chromium-Versionen von Edge nutzten es intern, aber diese sind leider nicht öffentlich.

  - Für Gecko sind alle WebIDL-Dateien in einem einzigen Verzeichnis zusammengefasst: <https://searchfox.org/mozilla-central/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellcode-Tree, aber sie sind nicht WebIDL, daher können Sie diese ignorieren. Ältere Versionen von Gecko haben einige ihrer WebIDL verstreut und verwenden möglicherweise sogar Mozillas IDL anstelle von WebIDL, um einige Web-Schnittstellen zu beschreiben, aber dies wird in keinem aktuellen Gecko-Code ein Problem darstellen.
  - Für Chromium befinden sie sich an zwei Orten, beide Unterverzeichnisse des Source-Code-Verzeichnisses [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/): [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Chromium-Quellcode hat IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quellcode verstreut, sodass Sie etwas mehr graben müssen: z.B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL wird in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Es wurde jedoch so entworfen, dass es erweitert werden kann, um mehr Informationen zu übermitteln, und Browseranbieter haben dies getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDL erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple auch eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt bereitgestellt.

> [!NOTE]
> Wir beschreiben hier nur den Teil von WebIDL, der beim Schreiben von Dokumentationen am nützlichsten ist. Es gibt viele weitere Annotationen, die für Implementierer nützlich sind; beziehen Sie sich auf die vier oben verlinkten Dokumente, um einen vollständigen Überblick zu erhalten.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die die allgemeinen API-Funktionen beschreibt.

### Name der Schnittstelle

Der Name der Schnittstelle ist die Zeichenfolge, die nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat eine eigene Seite in der Dokumentation, auf der jeder Konstruktor, jede Eigenschaft und jede Methode aufgeführt ist, die dafür definiert ist.

### Vererbungskette

Der Elternteil, falls vorhanden, einer gegebenen Schnittstelle wird nach dem Schnittstellennamen definiert, gefolgt von einem Doppelpunkt (`':'`). Es kann nur einen Elternteil pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgelistet (using the \\{{APIRef}} macro). Es kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden sind für mehrere Schnittstellen verfügbar. Um eine erneute Definition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen definiert, die _Mixins_ genannt werden.

Ab September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin`, um eine Mixin-Schnittstelle zu definieren, wie folgt:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Dann verwenden Sie das Schlüsselwort `includes`, um anzugeben, dass die in einem Mixin definierten Eigenschaften auf einer Schnittstelle verfügbar sind:

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

Für Dokumentationszwecke versteckt MDN Mixins. Sie sind abstrakte und nur für Spezifikationen gedachte Konstrukte.
Sie sind nicht in der Browser-Konsole sichtbar und es ist nützlicher zu wissen, auf welchen realen Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie ein Mixin in IDL finden, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils),
suchen Sie nach den Schnittstellen, die das Mixin implementieren, zum Beispiel
[HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass anstatt `HTMLHyperlinkElementUtils` zu dokumentieren,
die Dokumentation zu den konkreten Schnittstellen hinzugefügt wird, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)
und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Siehe die folgenden zwei Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenrichtlinie für Mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die Sie noch an einigen Stellen antreffen könnten, werden Mixins durch die Annotation `[NoInterfaceObject]` vorangestellt:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf einer Schnittstelle implementiert sind, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in Window und Workern

Die Verfügbarkeit in Web-Workern (jeglicher Art) und im Window-Bereich wird durch eine Annotation definiert: `[Exposed=(Window,Worker)]`. Die Annotation gilt für die Partial-Schnittstelle, mit der sie aufgelistet ist.

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

In diesem Fall ist `Performance.now()` sowohl im `Window`-Bereich als auch für jeden Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Web-Worker verfügbar sind.

Die am häufigsten verwendeten Werte für `[Exposed]` sind:

- `Window`
  - : Die Partial-Schnittstelle ist im [`Window`](/de/docs/Web/API/Window) globalen Bereich verfügbar.
- `Worker`
  - : Die Partial-Schnittstelle ist für jede Art von Worker verfügbar, das heißt, wenn der globale Bereich ein Nachkomme von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Es ist auch für `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar sind und nur intern in Firefox verwendet werden.)
- `DedicatedWorker`
  - : Die Partial-Schnittstelle ist nur für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die Partial-Schnittstelle ist nur für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die Partial-Schnittstelle ist nur für den [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein anderer Wert ist möglich, wie `System`, aber dies hat eine [besondere Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]`-Annotation haben. Dies bedeutet, dass, wenn ein Objekt dieses Typs als globaler Bereich verwendet wird, jede Schnittstelle, Eigenschaft oder Methode, die `xyz` als Wert von `[Exposed]` hat, verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier wird definiert, dass, wenn der globale Bereich vom Typ `DedicatedWorkerGlobalScope` ist, das heißt, wenn wir in einem dedizierten Worker sind, jede Schnittstelle, Eigenschaft oder Methode, die mithilfe der `[Exposed]`-Annotation für `Worker` oder `DedicatedWorker` verfügbar gemacht wird, verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur in der Browser-Kompatibilitäts-Sektion verwendet werden.

In Gecko kann die Verfügbarkeit einer Partial-Schnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden, durch eine Präferenz (gewöhnlich "pref" genannt) gesteuert werden. Dies ist auch in der WebIDL markiert.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier steuert `media.webspeech.synth.enabled` die `SpeechSynthesis`-Schnittstelle und ihre Eigenschaften (das vollständige Listing hat mehr als 3).

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

### Nur im Systemcode verfügbar

Einige Schnittstellenfunktionen sind möglicherweise nur im internen Systemcode des Browsers oder im Chrome-Code verfügbar. Um dies zu kennzeichnen, verwenden wir in Gecko \[ChromeOnly], zum Beispiel ist die Eigenschaft `propName` im folgenden Beispiel nur über Chrome-Code aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Man erkennt die Definition einer Eigenschaft an dem Vorhandensein des Schlüsselworts `attribute`.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in der Dokumentation werden wir darauf als `HTMLMediaElement.error` referenzieren, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix, indem \\{{domxref('HTMLMediaElement.error')}} verwendet wird, oder **ohne** das Präfix, indem \\{{domxref('HTMLMediaElement.error', 'error')}} verwendet wird, wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt des Typs `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass es den Wert `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies der Fall sein kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann durch ein _erweitertes Attribut_, eine Zeichenfolge in eckigen Klammern eingeschlossen (wie `[LegacyNullToEmptyString]`), mit einem Präfix versehen sein. Solche erweiterten Attribute zeigen besondere Verhaltensweisen an, die in der Prosa beschrieben werden müssen. Hier ist eine Liste der standardmäßigen erweiterten Attribute von Typen und die Ergänzung, die gemacht werden muss:

- `[LegacyNullToEmptyString]`

  - : Der `null`-Wert wird auf nicht standardmäßige Weise in eine Zeichenfolge umgewandelt. Die Standardmethode ist die Umwandlung in die Zeichenfolge `"null"`, aber in diesem Fall wird es in `""` umgewandelt.

    Fügen Sie den folgenden Satz am Ende des Abschnitts _Wert_ des Artikels hinzu:

    _Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in die leere Zeichenfolge (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibberechtigungen für die Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht geändert werden. Es muss als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}}-Makro neben dem Definitionsterm hinzugefügt wird.
- Im ersten Satz auf seiner eigenen Seite, indem die Beschreibung mit: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_ beginnt.
- Indem die Beschreibung auf der Schnittstellen-Seite mit _Gibt… zurück_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können so beschrieben werden, dass sie einen Wert 'zurückgeben'. Nicht schreibgeschützte Eigenschaften können auch zum Setzen eines Wertes verwendet werden.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie wenn einige Werte illegal sind, kann das Setzen eines neuen Wertes dazu führen, dass eine Ausnahme ausgelöst wird. Dies wird mithilfe der `[SetterThrows]`-Annotation gekennzeichnet. Wenn dies geschieht, _muss_ der Abschnitt "Syntax" der Eigenschaftsseite einen Abschnitt "Ausnahmen" enthalten. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als textuelle Informationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert sind. [Der Versuch, einen illegalen enumerierten Wert zu setzen](https://webidl.spec.whatwg.org/#es-enumeration) (abgebildet auf eine JavaScript {{jsxref('String')}}) löst eine {{jsxref('TypeError')}}-Ausnahme aus. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Es ist unüblich, dass Getter Ausnahmen auslösen, obwohl dies in einigen wenigen Fällen geschieht. In diesem Fall wird die `[GetterThrows]`-Annotation verwendet. Auch hier muss der Abschnitt "Syntax" der Eigenschaftsseite einen Abschnitt "Ausnahmen" enthalten.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen werfen

Wenn die Semantik von Webidl nicht befolgt wird, wird oft eine Ausnahme ausgelöst, auch ohne dass `[SetterThrows]` oder `[GetterThrows]` gesetzt sind. Zum Beispiel, wenn im strengen Modus versucht wird, einer schreibgeschützten Eigenschaft einen neuen Wert zuzuweisen, das heißt, deren implizierten Setter aufzurufen, wird im strengen Modus eine Ausnahme für schreibgeschützte Eigenschaften ausgelöst.

Hauptsächlich aus Kompatibilitätsgründen ist dieses Verhalten manchmal lästig. Um dies zu verhindern, indem ein No-Op-Setter erstellt wird (das heißt, dass jeder Versuch, der Eigenschaft einen neuen Wert zuzuweisen, stillschweigend ignoriert wird), kann die `[LenientSetter]`-Annotation verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird der Beschreibung der Eigenschaft ein zusätzlicher Satz hinzugefügt. Zum Beispiel:

_Obwohl diese Eigenschaft schreibgeschützt ist, löst sie keine Ausnahme aus, wenn sie modifiziert wird (selbst im strengen Modus); der Setter ist eine No-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz auf ein internes Objekt sein.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (als IDL `DOMString`, oder andere), {{jsxref("Number")}} (als IDL `byte`, `octet`, `unsigned int`, oder andere) und {{jsxref("Boolean")}} werden immer kopiert und es muss nichts Besonderes über sie bemerkt werden (es ist das natürliche Verhalten, das von einem JavaScript-Entwickler erwartet wird).

Für Schnittstellenobjekte ist der Standard, eine _Referenz_ auf das interne Objekt zurückzugeben. Dies muss sowohl in der kurzen Beschreibung auf der Schnittstellenseite, als auch in der Beschreibung auf den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, gilt für die Referenz (das interne Objekt kann nicht geändert werden.) Die Eigenschaften des zurückgegebenen Objekts können geändert werden, auch wenn sie in der entsprechenden Schnittstelle als schreibgeschützt gekennzeichnet sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dieser Fall wird im WebIDL mithilfe der `[NewObject]`-Annotation angezeigt.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: eine Änderung daran wird den internen Wert nicht ändern, und eine Änderung am internen Wert wird jede Objektinstanz nicht betreffen. In der Dokumentation werden wir es kennzeichnen, indem wir das Adjektiv _neu_ neben dem Objekt verwenden:

_Die schreibgeschützte Eigenschaft **`HTMLMediaElement.buffered`** gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Fall einer Referenz auf ein Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir es explizit, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sein werden. Um dies zu kennzeichnen, qualifizieren wir die Sammlung als **Live**-`HTMLCollection` (oder `HTMLFormElementsCollections` oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch auf der Unterseite.

Zum Beispiel:

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt ein Live-\\{{domxref("HTMLFormControlsCollection")}}-Objekt zurück, das…

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Eigenschaften in Workern findet sich ebenfalls im WebIDL. Für eine Eigenschaft ist die Standardverfügbarkeit dieselbe wie die der `interface` (die nur für den [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar ist, wenn nichts Besonderes markiert ist) oder die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist oder nicht, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur in der Browser-Kompatibilitäts-Sektion verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies ist auch in der WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die `textTracks`-Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

## Methoden

Man erkennt die Definition einer Methode an dem Vorhandensein von Klammern nach dem Namen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir werden darauf als `HTMLMediaElement.canPlayType()` (mit den Klammern, die darauf hindeuten, dass es sich um eine Methode handelt) in den Dokumenten referenzieren, da es zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix, indem \\{{domxref('HTMLMediaElement.canPlayType()')}} verwendet wird, oder **ohne** das Präfix, indem \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} verwendet wird, wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer enthalten sein.

### Parameter

```js
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode werden im Abschnitt "Syntax" der Methodenunterseite aufgelistet. Sie sind in der WebIDL in der Reihenfolge zwischen den Klammern als durch Kommas getrennte Liste aufgeführt. Jeder Parameter hat einen Namen (oben angegeben) und einen Typ (z.B. ein `'?'` bedeutet, dass der `null`-Wert gültig ist.) Wenn als `optional` markiert, ist der Parameter optional, bei einem Methodenaufruf eingeschlossen zu werden, und muss die \\{{OptionalInline}}-Flag enthalten, wenn er im Abschnitt "Syntax" aufgelistet wird. Der Standardwert des Parameters wird nach dem Gleichheitszeichen (`'='`) aufgelistet.

Parametertypen können spezielle Verhaltensweisen haben, die mit erweiterten Attributen beschrieben werden (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und der Zusatz, den Sie in der Prosa machen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie am Ende der Parameterbeschreibung den folgenden Satz hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie die leere Zeichenkette (`""`)._

### Typ des Rückgabewerts

```webidl
DOMString canPlayType(DOMString type);
```

Der Rückgabewerttyp ist vor dem Methodennamen angegeben — im obigen Fall ist der Wert ein Objekt vom Typ `DOMString`. Wenn der Rückgabetyp von einem Fragezeichen (`'?'`) gefolgt wird, kann auch ein `null`-Wert zurückgegeben werden, und die Dokumentation muss erklären, _wann_ dies der Fall sein kann. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das Schlüsselwort `void` ist, bedeutet dies, dass es keinen Rückgabewert gibt. Es ist kein Rückgabewerttyp. Wenn der WebIDL-Eintrag `void` lautet, sollte der Abschnitt _Rückgabewert_ in den Dokumenten einfach "None (\{{jsxref("undefined")}})." aussagen.

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird mithilfe der `[Throws]`-Annotation markiert. Wenn dies geschieht, _muss_ der Abschnitt "Syntax" der Methoden-Seite einen Abschnitt "Ausnahmen" enthalten. Die Liste der Ausnahmen und die Bedingungen, um sie auszulösen, sind als textuelle Informationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert sind. [Der Versuch, einen illegalen enumerierten Wert zu setzen](https://webidl.spec.whatwg.org/#es-enumeration) (abgebildet auf eine JavaScript {{jsxref('String')}}) als Parameter wird eine {{jsxref('TypeError')}}-Ausnahme auslösen. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Sehen Sie sich einen dieser [_Ausnahmen_-Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Methoden in Workern ist ebenfalls in der WebIDL ersichtlich. Für eine Methode ist die Standardverfügbarkeit dieselbe wie die der `interface` (die nur für den [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar ist, wenn nichts Besonderes markiert ist) oder der `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur in der Browser-Kompatibilitäts-Sektion verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies ist auch in der WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die `addTextTrack()`-Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

## Spezialmethoden

Einige Methoden sind nicht als reguläre Methoden in WebIDL aufgelistet, sondern stattdessen als spezielle Schlüsselwörter, die in bestimmte standardmäßige JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifier gibt an, wie ein Objekt, das auf einer Schnittstelle basiert, in Kontexten, die eine Zeichenkette erwarten, aufgelöst wird. (Siehe den Abschnitt [Stringifiers](#stringifiers).) Darüber hinaus wird das Schlüsselwort auf `toString()` abgebildet und folgendermaßen definiert:

```webidl
stringifier;
```

Die `toString()`-Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Range.toString()`](/de/docs/Web/API/Range/toString))

Ein Jsonifier wird auf `toJSON()` abgebildet und folgendermaßen definiert:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()`-Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON))

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur der nicht standardisierte, wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterable_ definiert werden, was bedeutet, dass sie die folgenden Methoden hat: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei Arten von Iterationen: den _Wert-Iterator_ und den _Paar-Iterator_.

#### Wert-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte des Typs _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes (das sind `unsigned long`) zurückgibt.
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt.
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt, die seine Indizes sind (das sind `unsigned long`). Im Fall von Wert-Iterators sind `keys()` und `entries()` identisch.
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator ermöglicht die Verwendung der Syntax `for (const p in object)` als Abkürzung von `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung hinzu.

Die zu iterierenden Werte können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, mit der `iterable<valueType>`-Notation. Siehe zum Beispiel [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit in der WebIDL-Datei, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angezeigt, wenn die Schnittstelle `getter`-Methoden mit einem Parameter vom Typ `unsigned long` enthält.
- Außerhalb der WebIDL-Datei, in der begleitenden Prosa. Eine solche Prosa wird typischerweise in der Spezifikation gefunden und beginnt normalerweise mit: _"Die [Werte zu iterieren](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte des Typs _valueType_ mit Schlüsseln des Typs _keyType_ iterieren, das heißt die Wertpaare. Die generierten Methoden werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Wertpaare zurückgibt. Siehe zum Beispiel [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Siehe zum Beispiel [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Siehe zum Beispiel [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Siehe zum Beispiel [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator erlaubt es, die Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())` zu verwenden. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung hinzu. Siehe zum Beispiel [`FormData`](/de/docs/Web/API/FormData).

Die Wertepaare, die iteriert werden sollen, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, mit der `iterable<keyType, valueType>`-Notation. Siehe zum Beispiel [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb der WebIDL-Datei, in der begleitenden Prosa. Eine solche Prosa wird typischerweise in der Spezifikation gefunden und beginnt normalerweise mit: _"Die [Wertpaare zu iterieren](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Set-ähnliche Methoden

Eine Schnittstelle kann als _set-like_ definiert werden, was bedeutet, dass sie eine _geordnete Menge von Werten_ darstellt und die folgenden Methoden haben wird: `entries()`, `keys()`, `values()`, `forEach(),` und `has()` (sie hat auch die `size`-Eigenschaft). Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Der set-like kann mit `read-only` oder nicht gelesen werden. Wenn nicht schreibgeschützt, werden die Methoden zur Änderung des Sets ebenfalls implementiert: `add()`, `clear()`, und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes zurückgibt. Siehe zum Beispiel [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Siehe zum Beispiel [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Siehe zum Beispiel [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Siehe zum Beispiel [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die Set-like-Deklaration nicht mit schreibschutz versehen ist, werden die folgenden Methoden ebenfalls generiert:

- `add()` fügt einen Eintrag hinzu. Zum Beispiel die `.add()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()` leert die set-like Struktur. Zum Beispiel die `.clear()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()` entfernt einen Eintrag. Zum Beispiel die `.delete()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche set-Schnittstelle erlaubt auch die Verwendung der Syntax `for (const p in object)` als Abkürzung von `for (const p in object.entries())`.

## Spezielle Verhaltensweisen

Einige IDL-Mitglieder weisen spezielle Verhaltensweisen auf, die auf den entsprechenden Seiten vermerkt werden sollten.

### Stringifiers

Zusätzlich zur Ergänzung der `toString()`-Methode zu einer Schnittstelle, wie in [toString() und toJSON()](#tostring_and_tojson) beschrieben, zeigen Stringifiers auch an, dass eine Objektinstanz, wenn sie als Zeichenkette verwendet wird, eine andere Zeichenkette als die Standardzeichenkette zurückgibt. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts). Genau, wie dies beschrieben wird, hängt von der Art und Weise ab, wie es im IDL definiert ist. Unabhängig vom Wie sollte das nicht standardmäßige Verhalten auf der Schnittstellenseite beschrieben werden.

Wenn das Schlüsselwort `stringifier` eine Attributnamen begleitet, hat das Referenzieren des Objektnamens das gleiche Ergebnis wie das Referenzieren des Attributnamens. Betrachten Sie die folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse, die auf dieser Schnittstelle basiert, sind die folgenden Codezeilen gleichwertig. Das Verhalten sollte auf der Eigenschaftsseite zusätzlich zur Schnittstellenseite vermerkt werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das Schlüsselwort `stringifier` alleine verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten wird im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu erfahren, was eine Schnittstellenreferenz tatsächlich tut, beachten Sie die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind in WebIDL etwas verborgen: sie sind als Annotationen der Hauptschnittstelle aufgelistet.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor für eine bestimmte Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit derselben Schnittstelle wird mit der `Constructor`-Annotation in der Schnittstelle definiert. Es können Klammern und eine Liste von Parametern vorhanden sein oder nicht (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird das obige im Slug _Web/API/MessageChannel/MessageChannel_ mit dem Titel `MessageChannel()` angegeben.

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen hat als den seiner Schnittstelle. Zum Beispiel erstellt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL mithilfe der `NamedConstructor`-Annotation auf der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und dem Parameter innerhalb der Klammern, im gleichen Format wie bei Methoden zu sehen ist.

Es kann mehrere benannte Konstruktoren für eine bestimmte Schnittstelle geben, aber dies ist äußerst selten; in einem solchen Fall schließen wir eine Unterseite pro Namen ein.

### Neue Konstruktorsyntax

Ab September 2019 wurde die WebIDL-Konstruktionssyntax aktualisiert. Die Konstruktionssyntax umfasst keine erweiterte Attributierung mehr auf der Schnittstelle:

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

Dies bedeutet, dass erweiterte Attribute nun auf dem Konstruktor angegeben werden können, und es wird nicht mehr angenommen, dass alle Konstruktoren Ausnahmen auslösen. Wenn ein Konstruktor Ausnahmen auslöst, wird `[Throws]` verwendet, um anzugeben, dass:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, daher werden Sie wahrscheinlich beide in freier Wildbahn antreffen. Aus diesem Grund werden wir hier weiterhin beide Syntaxarten behandeln.

### Verfügbarkeit in Workern

Konstruktoren haben dieselbe Verfügbarkeit wie die Schnittstelle oder Partial-Schnittstelle, auf der sie definiert sind. Die Unterseite enthält diese Informationen auf die gleiche Weise wie für eine Methode.

### Präferenzen

Konstruktoren werden durch dieselben Präferenzen gesteuert wie die Schnittstelle oder Partial-Schnittstelle, auf der sie definiert sind. Die Unterseite enthält diese Informationen auf die gleiche Weise wie für eine Methode.
