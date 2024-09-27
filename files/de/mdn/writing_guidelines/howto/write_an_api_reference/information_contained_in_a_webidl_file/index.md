---
title: Informationen in einer WebIDL-Datei
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Bei der Erstellung von Dokumentation über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte, sowie das Modell, und die Implementierungen beschreiben, was tatsächlich in die Browser integriert wurde. WebIDL-Dateien sind eine sehr komprimierte Art, viele, aber nicht alle, Informationen über die API zu liefern. Dieses Dokument bietet eine Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist dafür ausgelegt, APIs zu beschreiben. In der weiteren Welt der Informatik gibt es mehrere Arten von IDL. In der Welt der Browser wird die von uns verwendete IDL _WebIDL_ genannt. Es gibt zwei Arten von WebIDL: die in der WebIDL-Spezifikation angegebene und die in Browsern implementierte. Die Spezifikation ist die kanonische Referenz, und die Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist, und enthält zusätzliche Informationen wie Annotationen, Informationen zu nicht standardisierten Elementen und browserspezifische Erweiterungen der IDL-Spezifikation.

## Wo man WebIDL-Dateien findet

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr bequeme Möglichkeit, eine präzise Definition zu vermitteln. Diese beschreiben die Syntax der API. Obwohl die kanonische Referenz, müssen wir daran denken, dass sie von der tatsächlichen Implementierung abweichen kann. Auf MDN wollen wir praktisch sein und dokumentieren, was die Webplattform wirklich ist, nicht was sie idealerweise sein sollte. Überprüfen Sie daher doppelt, was dort mit Implementierungen vorhanden ist (und zögern Sie nicht, Fehler zu melden, wenn Sie Inkonsistenzen entdecken).
- Drei Browser-Engines verwenden (modifiziertes) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Vor-Chromium-Versionen von Edge haben es intern genutzt, aber diese sind leider nicht öffentlich.

  - Für Gecko sind alle WebIDL-Dateien in einem einzigen Verzeichnis gruppiert: <https://searchfox.org/mozilla-central/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellbaum, aber sie sind kein WebIDL, also können Sie diese ignorieren. Ältere Versionen von Gecko haben einige ihrer WebIDL ein wenig verstreut und verwenden möglicherweise Mozillas IDL anstelle von WebIDL, um einige Webschnittstellen zu beschreiben, aber dies wird in keinem aktuellen Gecko-Code ein Problem darstellen.
  - Für Chromium befinden sie sich an zwei Standorten, beide Unterverzeichnisse des Quellcodes-Verzeichnisses [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/): [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Chromium-Quellcode hat IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und für API-Implementierungen nicht relevant.
  - Für WebCore sind sie im Quellcode verstreut, sodass Sie etwas mehr graben müssen: z.B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Es wurde jedoch so entworfen, dass es erweitert werden kann, um mehr Informationen zu vermitteln, und Browser-Anbieter haben dies auch getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDL erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple ebenfalls eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt bereitgestellt.

> [!NOTE]
> Hier beschreiben wir nur den Teil von WebIDL, der beim Schreiben von Dokumentationen am nützlichsten ist. Es gibt viele weitere Annotationen, die für Implementierer nützlich sind; konsultieren Sie die vier oben verlinkten Dokumente, um einen vollständigen Überblick zu erhalten.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die die allgemeinen API-Funktionen beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist der String, der nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, die jeden Konstruktor, jede Eigenschaft und jede Methode auflistet, die für sie definiert sind.

### Vererbungskette

Der Elternteil, falls vorhanden, einer gegebenen Schnittstelle wird nach dem Schnittstellennamen definiert und folgt einem Doppelpunkt (`':'`). Es kann nur einen Elternteil pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgelistet (mithilfe des \\{{APIRef}}-Makros). Sie kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden sind für mehrere Schnittstellen verfügbar. Um eine Neudefinition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen definiert, die _Mixins_ genannt werden.

Seit September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin`, um eine Mixin-Schnittstelle zu definieren, wie folgt:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Dann verwenden Sie das Schlüsselwort `includes`, um zu sagen, dass die in einem Mixin definierten Eigenschaften auf einer Schnittstelle verfügbar sind:

```webidl
MyInterface includes MyMixin;
```

Mixins haben keine Vererbung und können keine anderen Mixins einschließen. Sie unterstützen jedoch Teilmengen, sodass Sie Dinge wie folgt sehen:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Aus Dokumentationszwecken verbirgt MDN Mixins. Sie sind abstrakte und nur in der Spezifikation vorkommende Konstruktionen. Man kann sie nicht in der Browser-Konsole sehen, und es ist nützlicher zu wissen, auf welchen echten Schnittstellen Methoden und Eigenschaften implementiert werden.

Wenn Sie in IDL auf ein Mixin stoßen, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils), suchen Sie nach den Schnittstellen, die das Mixin implementieren, z.B. [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies anstatt `HTMLHyperlinkElementUtils` zu dokumentieren, werden die Dokumente auf die konkreten Schnittstellen angewendet, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Siehe die folgenden beiden Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenguideline für Mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die Sie möglicherweise noch an einigen Stellen antreffen, sind Mixins mit der Annotation `[NoInterfaceObject]` vorangestellt:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf einer Schnittstelle implementiert sind, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit im Fenster und in Workern

Die Verfügbarkeit in Web Workern (jeglicher Art) und im Fensterbereich wird mit einer Annotation definiert: `[Exposed=(Window,Worker)]`. Die Annotation gilt für die Teilschnittstelle, mit der sie aufgelistet ist.

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

In diesem Fall ist `Performance.now()` im Fensterbereich und für jeden Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Web Worker verfügbar sind.

Die häufigsten Werte für `[Exposed]` sind:

- `Window`
  - : Die Teilschnittstelle ist im globalen Bereich [`Window`](/de/docs/Web/API/Window) verfügbar.
- `Worker`
  - : Die Teilschnittstelle ist für jeden Art von Worker verfügbar, das heißt, wenn der globale Bereich ein Nachkomme von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (es ist auch verfügbar für `ChromeWorker`, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar sind und intern in Firefox verwendet werden.)
- `DedicatedWorker`
  - : Die Teilschnittstelle ist nur im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die Teilschnittstelle ist nur im [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die Teilschnittstelle ist nur im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein weiterer Wert ist möglich, wie `System`, aber dies hat eine [besondere Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]`-Annotation haben. Dies bedeutet, dass, wenn ein Objekt dieses Typs als globaler Bereich verwendet wird, jede Schnittstelle, Eigenschaft oder Methode, die `xyz` als Wert von `[Exposed]` hat, verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier ist definiert, dass wenn der globale Bereich vom Typ `DedicatedWorkerGlobalScope` ist, das heißt, wenn wir uns in einem dedizierten Worker befinden, jede Schnittstelle, Eigenschaft oder Methode, die mit `[Exposed]` auf `Worker` oder `DedicatedWorker` referenziert wird, verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt zur Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer Teilschnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden, durch eine Präferenz (meist "pref" genannt) gesteuert werden. Dies wird auch im WebIDL markiert.

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
> Der Standardwert der Präferenz ist direkt im WebIDL nicht verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

### Nur im Systemcode verfügbar

Einige Schnittstellen-Funktionen sind möglicherweise nur im browserinternen Systemcode oder Chromecode verfügbar. Um dies anzuzeigen, verwenden wir in Gecko \[ChromeOnly]. Beispielsweise kann die Eigenschaft propName im folgenden Beispiel nur über Chromecode aufgerufen werden:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Sie können die Definition einer Eigenschaft an der Präsenz des Schlüsselworts `attribute` erkennen.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumenten wird darauf als `HTMLMediaElement.error` verwiesen, da es zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix mittels \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix mittels \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass er den Wert `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies geschehen kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ vorangestellt werden, einem String, der in eckigen Klammern eingeschlossen ist (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute Hinweis auf spezielles Verhalten geben, die im Text beschrieben werden müssen. Hier ist eine Liste der Standard-erweiterten Typattribute und der Ergänzung, die vorgenommen werden muss:

- `[LegacyNullToEmptyString]`

  - : Der `null`-Wert wird auf nicht standardisierte Weise in einen String umgewandelt. Die Standardweise ist die Umwandlung in den String `"null"`, aber in diesem Fall wird er in `""` umgewandelt.

    Fügen Sie den folgenden Satz am Ende des _Wert_-Abschnitts des Artikels hinzu:

    _Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend ist mit `elt.innerHTML = ""`._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibberechtigungen auf der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht modifiziert werden. Es muss als schreibgeschützt markiert sein:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}}-Makro neben seinem Definitionsterm hinzugefügt wird.
- Im ersten Satz seiner eigenen Seite, indem die Beschreibung beginnt mit: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_
- Indem die Beschreibung auf der Schnittstellenseite mit _Gibt zurück…_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als 'zurückgebend' beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert zu setzen.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie z.B. wenn bestimmte Werte illegal sind, kann das Setzen eines neuen Wertes zu einer Ausnahme führen. Dies wird mit der `[SetterThrows]`-Annotation markiert. Wenn dies geschieht, muss der Syntax-Abschnitt der Eigenschaftsseite einen Abschnitt zu Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie geworfen werden, sind als Textinformationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Anbindungen definiert werden. [Der Versuch, einen illegalen enumerierten Wert festzulegen](https://webidl.spec.whatwg.org/#es-enumeration) (der auf einen JavaScript {{jsxref('String')}} abgebildet wird), verursacht eine {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Es ist ungewöhnlich, dass Getter Ausnahmen auslösen, obwohl es in einigen Fällen vorkommt. In diesem Fall wird die `[GetterThrows]`-Annotation verwendet. Auch hier muss der Syntax-Abschnitt der Eigenschaftsseite einen Abschnitt zu Ausnahmen haben.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Auslösung von Ausnahmen

Wenn die Semantik von WebIDL nicht befolgt wird, wird oft eine Ausnahme ausgelöst, selbst wenn `[SetterThrows]` oder `[GetterThrows]` nicht gesetzt sind. Zum Beispiel, wenn wir im strengen Modus versuchen, eine schreibgeschützte Eigenschaft auf einen neuen Wert zu setzen, also ihren impliziten Setter zu rufen, wird eine schreibgeschützte Eigenschaft im strikten Modus eine Ausnahme auslösen.

Hauptsächlich aus Kompatibilitätsgründen kann dieses Verhalten manchmal störend sein. Um dies zu verhindern, indem ein No-Op-Setter erstellt wird (das heißt, indem jeder Versuch, die Eigenschaft auf einen neuen Wert zu setzen, stillschweigend ignoriert wird), kann die `[LenientSetter]`-Annotation verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird der Beschreibung der Eigenschaft ein zusätzlicher Satz hinzugefügt. Z.B.

_Obwohl diese Eigenschaft schreibgeschützt ist, wird sie nicht werfen, wenn sie modifiziert wird (selbst im strengen Modus); der Setter ist eine No-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz auf ein internes Objekt sein.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (als IDL `DOMString` oder andere), {{jsxref("Number")}} (als IDL `byte`, `octet`, `unsigned int` oder andere) und {{jsxref("Boolean")}} werden immer kopiert und müssen nicht besonders erwähnt werden (es ist ein natürliches Verhalten, das von einem JavaScript-Entwickler erwartet wird).

Für Schnittstellenobjekte ist die Standardeinstellung, eine _Referenz_ auf das interne Objekt zurückzugeben. Dies muss sowohl in der Kurzbeschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, gilt für die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, selbst wenn sie in der relevanten Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dieser Fall wird im WebIDL mit der `[NewObject]`-Annotation angegeben.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: die Änderung dieses Objekts ändert nicht den internen Wert und eine Änderung im internen Wert wirkt sich nicht auf jede Objektinstanz aus. In der Dokumentation markieren wir dies, indem wir das Adjektiv _neu_ neben das Objekt setzen:

_Die schreibgeschützte Eigenschaft **`HTMLMediaElement.buffered`** gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Falle einer Referenz auf ein Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`) machen wir explizit, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sind. Um dies zu markieren, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollections` oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch in der Unterseite.

Z.B.

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine live \\{{domxref("HTMLFormControlsCollection")}} zurück, die…

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Eigenschaften in Workern wird ebenfalls im WebIDL gefunden. Für eine Eigenschaft ist der Standard die gleiche Verfügbarkeit wie die `interface` (die nur für den [`Window`](/de/docs/Web/API/Window) Kontext verfügbar ist, wenn nichts Besonderes markiert ist) oder wie die `partielle Schnittstelle`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie für Web Worker verfügbar ist oder nicht, direkt vor dem Abschnitt "Syntax".

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
> Der Standardwert der Präferenz ist direkt im WebIDL nicht verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

## Methoden

Sie können die Definition einer Methode an der Präsenz von Klammern nach dem Namen erkennen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir werden darauf als `HTMLMediaElement.canPlayType()` (mit den Klammern, die anzeigen, dass es sich um eine Methode handelt) in den Dokumenten verweisen, da es zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix mittels \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Präfix mittels \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer enthalten sein.

### Parameter

```js
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode sind im Syntaxabschnitt der Methodenseite aufgelistet. Sie werden im WebIDL in Reihenfolge, zwischen den Klammern, als kommagetrennte Liste aufgelistet. Jeder Parameter hat einen Namen (oben angegeben) und einen Typ (z.B. ein `'?'` bedeutet, dass der `null`-Wert gültig ist). Wenn als `optional` markiert, ist der Parameter optional und muss beim Aufruf einer Methode nicht zwingend enthalten sein und muss das \\{{OptionalInline}}-Flag enthalten, wenn er im Syntaxabschnitt aufgelistet wird. Der Standardwert des Parameters wird nach dem Gleichheitszeichen (`'='`) aufgelistet.

Parametertypen können spezielle Verhaltensweisen aufweisen, die durch erweiterte Attribute beschrieben werden (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und der Ergänzung, die Sie in den Text einfügen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie am Ende der Parameterbeschreibung den folgenden Satz hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird als leerer String (`""`) behandelt._

### Typ des Rückgabewerts

```webidl
DOMString canPlayType(DOMString type);
```

Der Rückgabewertetyp wird vor dem Methodennamen angegeben — im oben genannten Fall ist der Wert ein Objekt vom Typ `DOMString`. Wenn dem Rückgabewerttyp ein Fragezeichen (`'?'`) folgt, kann auch ein Wert von `null` zurückgegeben werden, und die Dokumentation muss erklären, _wann_ dies passieren kann. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das Schlüsselwort `void` ist, bedeutet dies, dass kein Rückgabewert vorhanden ist. Es ist kein Rückgabewertetyp. Wenn der Eintrag im WebIDL `void` liest, sollte der _Rückgabewert_-Abschnitt in den Dokumenten einfach "Keiner (\{{jsxref("undefined")}})." besagen.

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird mit der `[Throws]`-Annotation markiert. Wenn dies geschieht, muss der Syntaxabschnitt der Methodenseite einen Abschnitt für Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie geworfen werden, sind als Textinformationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Anbindungen definiert werden. [Der Versuch, einen illegalen enumerierten Wert festzulegen](https://webidl.spec.whatwg.org/#es-enumeration) (der auf einen JavaScript {{jsxref('String')}} abgebildet wird), als Parameter verursacht eine {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Sehen Sie sich einen dieser [Ausnahme_Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Methoden in Workern wird ebenfalls im WebIDL gefunden. Für eine Methode ist die Standardeinstellung die gleiche Verfügbarkeit wie die `interface` (die nur für den [`Window`](/de/docs/Web/API/Window) Kontext verfügbar ist, wenn nichts Besonderes markiert ist) oder die `partielle Schnittstelle`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie für Web Worker verfügbar ist, direkt vor dem Abschnitt "Syntax".

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

Hier steuert `media.webvtt.enabled` die `addTextTrack()`-Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist direkt im WebIDL nicht verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

## Spezielle Methoden

Einige Methoden werden nicht als reguläre Methoden in WebIDL aufgelistet, sondern als spezielle Schlüsselwörter, die in spezifische Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifizierer gibt an, wie ein Objekt basierend auf einer Schnittstelle in Kontexten aufgelöst wird, die einen String erwarten. (Siehe den Abschnitt [Stringifizierer](#stringifizierer)). Zusätzlich ist das Schlüsselwort auf `toString()` abgebildet und wird wie folgt definiert:

```webidl
stringifier;
```

Die Methode `toString()` wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Range.toString()`](/de/docs/Web/API/Range/toString))

Ein Jsonifizierer wird auf `toJSON()` abgebildet und wie folgt definiert:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die Methode `toJSON()` wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON))

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur der nicht standardisierte, wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Methoden ähnlich wie Iteratoren

Eine Schnittstelle kann als _iterable_ definiert werden, was bedeutet, dass sie die folgenden Methoden haben wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei Arten möglicher Iterationen: den _Wert-Iterator_ und den _Paar-Iterator_.

#### Wert-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte vom Typ _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes (die `unsigned long` sind) zurückgibt.
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt.
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt, die seine Indizes (die `unsigned long` sind) sind. Im Fall von Wert-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein.

Die zu iterierenden Werte können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei mithilfe der `iterable<valueType>`-Notation. Zum Beispiel, siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit in der WebIDL-Datei, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angezeigt, wenn die Schnittstelle `getter`-Methoden mit einem Parameter vom Typ `unsigned long` enthält.
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text ist typischerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"Die [zu iterierenden Werte](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte vom Typ _valueType_ mit Schlüsseln vom Typ _keyType_ iterieren, das sind die Wertpaare. Die generierten Methoden werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Wertpaare zurückgibt. Zum Beispiel, siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Zum Beispiel, siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Zum Beispiel, siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein. Z.B. [`FormData`](/de/docs/Web/API/FormData).

Die zu iterierenden Wertpaare können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei mithilfe der `iterable<keyType, valueType>`-Notation. Zum Beispiel, siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text ist typischerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"Die [zu iterierenden Wertpaare](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Methoden ähnlich wie Mengen

Eine Schnittstelle kann als _set-like_ definiert werden, was bedeutet, dass sie eine _geordnete Menge von Werten_ darstellt und die folgenden Methoden haben wird: `entries()`, `keys()`, `values()`, `forEach()` und `has()` (sie hat auch die `size`-Eigenschaft). Sie unterstützt auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Das set-like kann `readonly` oder nicht vorangestellt sein. Wenn nicht schreibgeschützt, werden auch die Methoden zum Ändern des Sets implementiert: `add()`, `clear()`, und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes zurückgibt. Zum Beispiel, siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Zum Beispiel, siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Zum Beispiel, siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die set-like-Erklärung nicht von schreibgeschützt vorangestellt ist, werden die folgenden Methoden ebenfalls generiert:

- `add()`, die einen Eintrag hinzufügt. Z.B. die `.add()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()`, die die set-like-Struktur leert. Z.B. die `.clear()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()`, die einen Eintrag entfernt. Z.B. die `.delete()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche Satzschnittstelle erlaubt auch die Verwendung der Syntax `for (const p in object)` als Abkürzung von `for (const p in object.entries())`.

## Spezielle Verhaltensweisen

Einige IDL-Mitglieder weisen spezielle Verhaltensweisen auf, die auf den entsprechenden Seiten vermerkt werden sollten.

### Stringifizierer

Zusätzlich zur Ergänzung der `toString()`-Methode zu einer Schnittstelle, wie in [toString() und toJSON()](#tostring_and_tojson) beschrieben, geben Stringifizierer auch an, dass eine Objektinstanz, wenn sie als String verwendet wird, einen anderen String als den Standard zurückgibt. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts). Wie genau hängt davon ab, wie es in der IDL spezifiziert ist. Unabhängig vom Wie sollte das nicht-standardmäßige Verhalten auf der Schnittstellenseite beschrieben werden.

Wenn das Schlüsselwort `stringifier` mit einem Eigenschaftsnamen zusammen verwendet wird, hat die Referenzierung des Objektnamens das gleiche Ergebnis wie die Referenzierung des Eigenschaftsnamens. Betrachten Sie die folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse, die auf dieser Schnittstelle basiert, sind die folgenden Codezeilen unten äquivalent. Das Verhalten sollte auf der Eigenschaftsseite zusätzlich zur Schnittstellenseite vermerkt werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das Schlüsselwort `stringifier` allein verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten ist im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu erfahren, was tatsächlich getan wird, wenn auf eine Schnittstelle referenziert wird, konsultieren Sie die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind in WebIDL etwas versteckt: Sie werden als Anmerkungen der Hauptschnittstelle aufgelistet.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer gegebenen Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit derselben Schnittstelle wird mit der `Constructor`-Annotation auf der Schnittstelle definiert. Es können Klammern und eine Liste von Parametern vorhanden sein oder nicht (wie in dem obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird das oben mit dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` angegeben.

Ein weiteres Beispiel für einen unbenannten Konstruktor, mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es kann auch mehrere unbenannte Konstruktoren geben, die sich durch ihre Parameterlisten unterscheiden. Die gesamte Syntax wird in einer einzigen Unterseite dokumentiert.

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen als seine Schnittstelle hat. Zum Beispiel erstellt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL unter Verwendung der `NamedConstructor`-Annotation auf der Schnittstelle definiert, gefolgt von dem Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und den Parametern innerhalb der Klammern, im gleichen Format, das Sie für Methoden sehen.

Es kann mehrere benannte Konstruktoren für eine bestimmte Schnittstelle geben, aber dies ist extrem selten; in einem solchen Fall enthalten wir eine Unterseite pro Namen.

### Neue Konstruktorsyntax

Seit September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax beinhaltet nicht mehr ein erweitertes Attribut auf der Schnittstelle:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax, die `constructor` genannt wird, ohne explizit definierten Rückgabetyp, die wie folgt geschrieben wird:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Das bedeutet, dass erweiterte Attribute jetzt auf den Konstruktor spezifiziert werden können und es nicht mehr angenommen wird, dass alle Konstruktoren werfen. Wenn ein Konstruktor wirft, wird `[Throws]` verwendet, um dies anzuzeigen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen auf die neue Syntax aktualisiert werden, sodass Sie wahrscheinlich beide in der freien Wildbahn antreffen. Wir werden daher beide Syntaxtypen hier weiterhin behandeln.

### Verfügbarkeit in Workern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle oder Teilschnittstelle, für die sie definiert sind. Die Unterseite liefert diese Information auf die gleiche Art wie für eine Methode.

### Präferenzen

Konstruktoren werden durch dieselbe Präferenz gesteuert wie die Schnittstelle oder Teilschnittstelle, für die sie definiert sind. Die Unterseite liefert diese Information auf die gleiche Art wie für eine Methode.
