---
title: Informationen in einer WebIDL-Datei
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Bei der Erstellung von Dokumentationen über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte, sowie das Modell, und die Implementierungen beschreiben, was tatsächlich in die Browser integriert wurde. WebIDL-Dateien sind eine sehr komprimierte Art, viele, aber nicht alle Informationen über die API zu geben. Dieses Dokument bietet eine Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist darauf ausgelegt, APIs zu beschreiben. In der weiten Welt der Informatik gibt es mehrere Arten von IDL. In der Welt der Browser wird das von uns verwendete IDL _WebIDL_ genannt. Es gibt zwei Arten von WebIDL: das in der WebIDL-Spezifikation angegebene und das in Browsern implementierte. Die Spezifikation ist die kanonische Referenz, und das Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist, und enthält zusätzliche Informationen wie Annotations, Informationen über nicht-standardisierte Elemente und browserspezifische Erweiterungen der IDL-Spezifikation.

## Wo man WebIDL-Dateien findet

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr praktische Methode, um präzise Definitionen zu vermitteln. Diese beschreiben die Syntax der API. Auch wenn es die kanonische Referenz ist, muss man beachten, dass sie von der tatsächlichen Implementierung abweichen kann. Bei MDN wollen wir pragmatisch sein und dokumentieren, was die Webplattform wirklich ist, nicht was sie idealerweise sein sollte. Überprüfen Sie also, was in den Implementierungen vorhanden ist (und zögern Sie nicht, Fehler zu melden, wenn Sie Inkonsistenzen entdecken).
- Drei Browser-Engines verwenden (modifiziertes) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Pre-Chromium-Versionen von Edge nutzten es intern, aber diese sind leider nicht öffentlich.

  - Bei Gecko sind alle WebIDL-Dateien in einem einzigen Verzeichnis gruppiert: <https://searchfox.org/mozilla-central/source/dom/webidl/>. Ihre Endung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellcodebaum, aber diese sind nicht WebIDL, daher können Sie sie ignorieren. Ältere Versionen von Gecko haben einige ihrer WebIDL verstreut, und verwenden eventuell Mozillas IDL anstelle von WebIDL, um einige Webschnittstellen zu beschreiben, aber das stellt in keinem aktuellen Gecko-Code ein Problem dar.
  - Bei Chromium befinden sie sich an zwei Stellen, beide Unterverzeichnisse des Quellcodes des [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/)-Verzeichnisses: [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Chromium-Quellcode enthält IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Bei WebCore sind sie im Quellcode zerstreut, sodass Sie etwas graben müssen: z. B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Aber es wurde so gestaltet, dass es erweitert werden kann, um mehr Informationen zu vermitteln, und Browseranbieter haben dies getan:

- Für Gecko hat Mozilla eine [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDLs erstellt.
- Für Chromium hat Google auch ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple auch eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt zur Verfügung gestellt.

> [!NOTE]
> Wir beschreiben hier nur den Teil von WebIDL, der beim Schreiben von Dokumentationen am nützlichsten ist. Es gibt viele weitere Anmerkungen, die für Implementierer nützlich sind; beziehen Sie sich auf die oben verlinkten vier Dokumente, um einen vollständigen Überblick zu erhalten.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die allgemeine API-Funktionen beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist die Zeichenfolge, die nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, ob eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, die jeden für sie definierten Konstruktor, jede Eigenschaft und Methode auflistet.

### Vererbungskette

Der Elternteil, falls vorhanden, einer gegebenen Schnittstelle wird nach dem Schnittstellennamen definiert und durch einen Doppelpunkt (`':'`) angezeigt. Es kann pro Schnittstelle nur einen Elternteil geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgelistet (mit dem \\{{APIRef}}-Makro). Sie kann auch als SVG-Bild über das \\{{InheritanceDiagram}}-Makro hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden sind in mehreren Schnittstellen verfügbar. Um eine erneute Definition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen namens _Mixins_ definiert.

Seit September 2019 wurde die Mixins-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin`, um eine Mixin-Schnittstelle zu definieren, wie folgt:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Dann verwenden Sie das Schlüsselwort `includes`, um zu sagen, dass die in einem Mixin definierten Eigenschaften in einer Schnittstelle verfügbar sind:

```webidl
MyInterface includes MyMixin;
```

Mixins haben keine Vererbung und können andere Mixins nicht beinhalten. Sie unterstützen jedoch Partials, sodass Sie Folgendes sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke verbirgt MDN Mixins. Sie sind abstrakte und nur in Spezifikationen vorhandene Konstrukte. Sie können sie nicht in der Browser-Konsole sehen, und es ist nützlicher zu wissen, auf welchen realen Schnittstellen Methoden und Eigenschaften implementiert werden.

Wenn Sie einem Mixin im IDL begegnen, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils),
suchen Sie nach den Schnittstellen, die das Mixin implementieren, zum Beispiel
[HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass anstelle der Dokumentation von `HTMLHyperlinkElementUtils` die Dokumentation zu den konkreten Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)
und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) hinzugefügt wird.

Siehe die folgenden beiden Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenrichtlinie für Mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).

### Alte Mixins-Syntax

In der alten WebIDL-Mixins-Syntax, die Sie möglicherweise noch an einigen Stellen finden, werden Mixins mit der `[NoInterfaceObject]`-Annotation vorangestellt:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden in einer Schnittstelle implementierte Mixins unter Verwendung des `implements`-Schlüsselworts definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit im Fenster und in Workern

Die Verfügbarkeit in Web Workern (jeglicher Art) und im Fensterbereich wird durch eine Annotation definiert: `[Exposed=(Window,Worker)]`. Die Annotation gilt für die partielle Schnittstelle, mit der sie aufgelistet ist.

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
  - : Die partielle Schnittstelle ist im {{domxref('Window')}}-globalen Bereich verfügbar.
- `Worker`
  - : Die partielle Schnittstelle ist für jeden Arbeiter verfügbar, d.h. wenn der globale Bereich ein Nachfolger von {{domxref('WorkerGlobalScope')}} ist — {{domxref('DedicatedWorkerGlobalScope')}}, {{domxref('SharedWorkerGlobalScope')}}, oder {{domxref('ServiceWorkerGlobalScope')}} (Es ist auch für `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar sind und intern zu Firefox gehören.)
- `DedicatedWorker`
  - : Die partielle Schnittstelle ist nur für die {{domxref('DedicatedWorkerGlobalScope')}} verfügbar.
- `SharedWorker`
  - : Die partielle Schnittstelle ist nur für die {{domxref('SharedWorkerGlobalScope')}} verfügbar.
- `ServiceWorker`
  - : Die partielle Schnittstelle ist nur für die {{domxref('ServiceWorkerGlobalScope')}} verfügbar.

Ein weiterer Wert ist möglich, wie `System`, aber dies hat eine [spezielle Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte in WebIDL-Dateien selbst definiert sind. Schnittstellen können eine `[Global=xyz]`-Annotation haben. Dies bedeutet, dass wenn ein Objekt dieses Typs als globaler Bereich verwendet wird, jede Schnittstelle, Eigenschaft oder Methode mit `xyz` als Wert von `[Exposed]` verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier wird definiert, dass, wenn der globale Bereich vom Typ `DedicatedWorkerGlobalScope` ist, d.h. wenn wir uns in einem dedizierten Worker befinden, jede Schnittstelle, Eigenschaft oder Methode, die mit der `[Exposed]`-Annotation für `Worker` oder `DedicatedWorker` verfügbar gemacht wird, verfügbar ist.

### Einstellungen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Bereich der Browserkompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer partiellen Schnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden durch eine Einstellung (gewöhnlich als "Pref" bezeichnet) gesteuert werden. Dies wird auch im WebIDL markiert.

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
> Der Standardwert der Einstellung ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

### Nur im Systemcode verfügbar

Einige Schnittstellenfunktionen könnten möglicherweise nur im internen Systemcode des Browsers oder im Chromecode verfügbar sein. Um dies zu signalisieren, verwenden wir in Gecko das \[ChromeOnly], zum Beispiel ist die Eigenschaft `propName` im folgenden Beispiel nur über den Chromecode aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Sie können die Definition einer Eigenschaft am Vorhandensein des `attribute`-Schlüsselworts erkennen.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumenten beziehen wir uns darauf als `HTMLMediaElement.error`, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix unter Verwendung von \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext offensichtlich und unmissverständlich ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass es den Wert `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies passieren kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ versehen werden, eine Zeichenfolge in eckigen Klammern (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute zeigen spezielles Verhalten an, welches im Text beschrieben werden muss. Hier ist eine Liste der Standard-erweiterten Attribute von Typen und der Ergänzung, die vorgenommen werden muss:

- `[LegacyNullToEmptyString]`

  - : Der `null`-Wert wird auf eine Weise in einen String konvertiert, die nicht dem Standard entspricht. Der Standard ist die Konvertierung zu der Zeichenkette `"null"`, aber in diesem Fall wird sie zu `""` konvertiert.

    Fügen Sie folgenden Satz am Ende des _Value_-Abschnitts des Artikels hinzu:

    _Wenn dieser Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt. Dies bedeutet, dass `elt.innerHTML = null` äquivalent zu `elt.innerHTML = ""` ist._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibberechtigungen für die Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht modifiziert werden. Sie muss als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}}-Makro neben seinem Definitionsterm hinzugefügt wird.
- Im ersten Satz seiner eigenen Seite, indem die Beschreibung mit: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_ beginnt.
- Indem seine Beschreibung auf der Schnittstellenseite mit _Gibt zurück…_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als "rückgebend" beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert zu setzen.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie wenn einige Werte illegal sind, kann das Setzen eines neuen Wertes zu einer Ausnahme führen. Dies wird unter Verwendung der `[SetterThrows]`-Annotation markiert. Wenn dies der Fall ist, _muss_ der Syntax-Abschnitt der Eigenschaftsseite einen Unterabschnitt "Ausnahmen" haben. Die Liste der Ausnahmen und die Bedingungen für deren Auslösung sind im Text in der Spezifikation dieser API aufgelistet.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen illegalen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) zu setzen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Es ist selten, dass Getter Ausnahmen auslösen, obwohl es in wenigen Fällen vorkommt. In diesem Fall wird die `[GetterThrows]`-Annotation verwendet. Auch hier _muss_ der Syntax-Abschnitt der Eigenschaftsseite einen Unterabschnitt "Ausnahmen" haben.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen auslösen

Wenn die Semantik von WebIDL nicht befolgt wird, wird oft eine Ausnahme geworfen, selbst ohne `[SetterThrows]` oder `[GetterThrows]` gesetzt zu haben. Zum Beispiel, wenn wir versucht, eine schreibgeschützte Eigenschaft auf einen neuen Wert zu setzen, d.h. ihren impliziten Setter aufzurufen, wird eine schreibgeschützte Eigenschaft im strikten Modus eine Ausnahme auslösen.

Meistens ist dieses Verhalten aus Kompatibilitätsgründen ärgerlich. Um dies zu verhindern, indem man einen No-Op-Setter erstellt (d.h. indem man jeden Versuch, die Eigenschaft auf einen neuen Wert zu setzen, stillschweigend ignoriert), kann die `[LenientSetter]`-Annotation verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird der Beschreibung der Eigenschaft ein zusätzlicher Satz hinzugefügt. Zum Beispiel:

_Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keine Ausnahme auslösen, wenn sie modifiziert wird (selbst im strikten Modus); der Setter ist eine Nicht-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz zu einem internen Objekt sein.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (als IDL `DOMString` oder andere), {{jsxref("Number")}} (als IDL `byte`, `octet`, `unsigned int` oder andere), und {{jsxref("Boolean")}} werden immer kopiert und es muss nichts Besonderes darüber erwähnt werden (es ist das natürliche Verhalten, das von einem JavaScript-Entwickler erwartet wird.)

Für Schnittstellenobjekte ist die Standardrückgabe eine _Referenz_ auf das interne Objekt. Dies muss sowohl in der kurzen Beschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, bezieht sich auf die Referenz (das interne Objekt kann nicht geändert werden.) Die Eigenschaften des zurückgegebenen Objekts können geändert werden, selbst wenn sie in der entsprechenden Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dies wird im WebIDL unter Verwendung der `[NewObject]`-Annotation angegeben.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: Wenn es geändert wird, wird der interne Wert nicht geändert, und eine Änderung des internen Werts wirkt sich nicht auf jede Instanz des Objekts aus. In der Dokumentation wird es mit der Verwendung des Adjektivs _neu_ neben dem Objekt markiert:

_Die **`HTMLMediaElement.buffered`**-Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

Im Fall einer Referenz zu einem Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir deutlich, dass Änderungen des zugrunde liegenden Objekts über die zurückgegebene Referenz verfügbar sein werden. Um dies zu markieren, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollections`, oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch in der Unterseite.

Zum Beispiel:

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine live \\{{domxref("HTMLFormControlsCollection")}} zurück, die…

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Eigenschaften in Workern wird ebenfalls im WebIDL gefunden. Für eine Eigenschaft ist der Standard dasselbe Verfügbarkeit wie die `interface` (d.h. nur für {{domxref('Window')}}-Kontext verfügbar, wenn nichts Besonderes markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web Workern verfügbar ist oder nicht, direkt vor dem "Syntax"-Abschnitt.

### Einstellungen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Bereich der Browserkompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Einstellung gesteuert werden. Dies wird auch im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die `textTracks`-Eigenschaft.

> [!NOTE]
> Der Standardwert der Einstellung ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

## Methoden

Sie können die Definition einer Methode am Vorhandensein von Klammern nach dem Namen erkennen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir beziehen uns darauf als `HTMLMediaElement.canPlayType()` (mit den Klammern, die angeben, dass es sich um eine Methode handelt) in den Dokumenten, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Präfix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext offensichtlich und unmissverständlich ist. Die Klammern sollten immer enthalten sein.

### Parameter

```js
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode werden im Syntax-Abschnitt der Methodenseite aufgelistet. Sie werden im WebIDL in Reihenfolge, zwischen den Klammern, als kommaseparierte Liste aufgelistet. Jeder Parameter hat einen Namen (oben angegeben) und einen Typ (z.B. bedeutet ein `'?'`, dass der `null`-Wert gültig ist.) Wenn als optional markiert, ist der Parameter optional einzuschließen und muss das \\{{OptionalInline}}-Flag enthalten, wenn er im Syntax-Abschnitt aufgelistet wird. Der Standardwert des Parameters wird nach dem Gleichheitszeichen (`'='`) aufgelistet.

Parametertypen können spezielle Verhaltensweisen haben, die mit erweiterten Attributen beschrieben werden (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und die Ergänzung, die im Text hinzugefügt werden muss:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie den folgenden Satz am Ende der Parameterbeschreibung hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird genauso behandelt wie der leere String (`""`)._

### Typ des Rückgabewerts

```webidl
DOMString canPlayType(DOMString type);
```

Der Typ des Rückgabewerts wird vor dem Methodennamen angegeben — im obigen Fall ist der Wert ein Objekt vom Typ `DOMString`. Wenn der Rückgabewerttyp von einem Fragezeichen (`'?'`) gefolgt wird, kann auch ein Wert von `null` zurückgegeben werden, und die Dokumentation muss erklären, _wann_ dies passieren kann. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das `void`-Schlüsselwort ist, bedeutet dies, dass es keinen Rückgabewert gibt. Es ist kein Rückgabewerttyp. Wenn der WebIDL-Eintrag `void` lautet, sollte der _Rückgabewert_-Abschnitt in den Dokumenten einfach "None (\{{jsxref("undefined")}})" angeben.

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird durch die `[Throws]`-Annotation markiert. Wenn dies der Fall ist, _muss_ der Syntax-Abschnitt der Methodenseite einen Unterabschnitt "Ausnahmen" haben. Die Liste der Ausnahmen und die Bedingungen für deren Auslösung sind als Textinformationen in der Spezifikation dieser API aufgelistet.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen illegalen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) als Parameter wird eine {{jsxref('TypeError')}}-Ausnahme auslösen. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Schauen Sie sich einen dieser [_Exceptions_ Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Methoden in Workern wird ebenfalls im WebIDL gefunden. Für eine Methode ist der Standard dieselbe Verfügbarkeit wie die `interface` (d.h. nur für {{domxref('Window')}}-Kontext verfügbar, wenn nichts Besonderes markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation sollte die Unterseite einen Satz enthalten, der angibt, ob sie in Web Workern verfügbar ist oder nicht, direkt vor dem Syntax-Abschnitt.

### Einstellungen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Bereich der Browserkompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Einstellung gesteuert werden. Dies wird auch im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die `addTextTrack()`-Methode.

> [!NOTE]
> Der Standardwert der Einstellung ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

## Spezielle Methoden

Einige Methoden sind nicht als reguläre Methoden in WebIDL aufgeführt, sondern als spezielle Schlüsselwörter, die auf spezifische Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifizierer gibt an, wie ein auf einer Schnittstelle basierendes Objekt in Kontexten aufgelöst wird, die einen String erwarten. (Siehe den Abschnitt [Stringifizierer](#stringifizierer).) Zusätzlich wird das Schlüsselwort auf `toString()` abgebildet und wie folgt definiert:

```webidl
stringifier;
```

Die `toString()`-Methode wird genau wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. {{domxref("Range.toString()")}})

Ein Jsonifizierer wird auf `toJSON()` abgebildet und wie folgt definiert:

```webidl
jsonifier; // Gecko-Version
serializer; // Standard-Version
```

Die `toJSON()`-Methode wird genau wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. {{domxref("Performance.toJSON()")}})

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur der nicht-standardmäßige, wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iteratoren-ähnliche Methoden

Eine Schnittstelle kann als _iterable_ definiert werden, was bedeutet, dass sie die folgenden Methoden haben wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} für ein ein solches Objekt.

Es gibt zwei mögliche Arten der Iteration: den _Wert-Iterator_ und den _Paar-Iterator._

#### Wert-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte vom Typ _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes zurückgibt (die `unsigned long` sind).
- `values()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt.
- `keys()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt, die seine Indizes (die `unsigned long` sind) sind. Im Fall von Wert-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, welche eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung hinzu.

Die zu iterierenden Werte können auf eine der folgenden Weisen definiert werden:

- In der WebIDL-Datei, mit der `iterable<valueType>`-Notation. Zum Beispiel, siehe {{domxref('DOMTokenList')}}.
- Implizit in der WebIDL-Datei, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angezeigt, wenn die Schnittstelle `getter`-Methoden mit einem Parameter vom Typ `unsigned long` enthält.
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text ist typischerweise in der Spezifikation zu finden und beginnt üblicherweise mit: _"Die [Werte zu iterieren](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte vom Typ _valueType_ mit Schlüsseln vom Typ _keyType_ iterieren, das bedeutet die Wertepaare. Die generierten Methoden werden sein:

- `entries()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Wertepaare zurückgibt. Zum Beispiel, siehe {{domxref('FormData.entries()')}}.
- `values()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Zum Beispiel, siehe {{domxref('FormData.values()')}}.
- `keys()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Zum Beispiel, siehe {{domxref('FormData.keys()')}}.
- `forEach()`, welche eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe {{domxref('Headers.forEach()')}}.

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung hinzu. Zum Beispiel {{domxref('FormData')}}.

Die zu iterierenden Wertpaare können auf eine der folgenden Weisen definiert werden:

- In der WebIDL-Datei, mit der `iterable<keyType, valueType>`-Notation. Zum Beispiel, siehe {{domxref('FormData')}}.
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text ist typischerweise in der Spezifikation zu finden und beginnt üblicherweise mit: _"Die [Wertepaare zu iterieren](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Set-ähnliche Methoden

Eine Schnittstelle kann als _set-like_ definiert werden, was bedeutet, dass sie eine _geordneten Menge von Werten_ darstellt, die die folgenden Methoden haben wird: `entries()`, `keys()`, `values()`, `forEach(),` und `has()` (sie hat auch die `size`-Eigenschaft). Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} für ein ein solches Objekt. Das Set-like kann entweder `readonly` oder nicht sein. Wenn es nicht schreibgeschützt ist, werden auch die Methoden zur Modifizierung des Sets implementiert: `add()`, `clear()`, und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes zurückgibt. Zum Beispiel, siehe {{domxref('NodeList.entries()')}}.
- `values()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Zum Beispiel, siehe {{domxref('NodeList.values()')}}.
- `keys()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Zum Beispiel, siehe {{domxref('NodeList.keys()')}}.
- `forEach()`, welche eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe {{domxref('NodeList.forEach()')}}.

In Fällen, in denen die set-like-Deklaration nicht mit schreibgeschützt vorangestellt ist, werden auch die folgenden Methoden generiert:

- `add()`, die einen Eintrag hinzufügt. Z.B. die `.add()`-Methode von {{domxref('FontFaceSet')}}.
- `clear()`, die die set-like-Struktur leert. Z.B. die `.clear()`-Methode von {{domxref('FontFaceSet')}}.
- `delete()`, die einen Eintrag entfernt. Z.B. die `.delete()`-Methode von {{domxref('FontFaceSet')}}.

Eine solche set-like Schnittstelle erlaubt auch die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`.

## Besondere Verhaltensweisen

Einige IDL-Mitglieder weisen besondere Verhaltensweisen auf, die auf geeigneten Seiten angemerkt werden sollten.

### Stringifizierer

Zusätzlich zur Hinzufügung der `toString()`-Methode zu einer Schnittstelle, wie im [toString() und toJSON()](#tostring_and_tojson)-Abschnitt beschrieben, geben Stringifizierer auch an, dass eine Objektinstanz, wenn sie als String verwendet wird, einen anderen String als den Standard zurückgibt. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts). Wie genau hängt von der Weise ab, wie es im IDL spezifiziert ist. Unabhängig vom Wie sollte das nicht-standardmäßige Verhalten auf der Schnittstellenseite beschrieben werden.

Wenn das `stringifier`-Schlüsselwort einen Attributnamen begleitet, hat das Referenzieren des Objektnamens dasselbe Ergebnis wie das Referenzieren des Attributnamens. Betrachten Sie das folgende IDL-Beispiel:

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

Wenn das `stringifier`-Schlüsselwort allein verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten wird im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu erfahren, was eine Schnittstellenreferenz tatsächlich tut, beziehen Sie sich auf die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind im WebIDL etwas versteckt: sie sind als Annotationen der Hauptschnittstelle aufgelistet.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer gegebenen Schnittstelle A kann als `a = new A(parameter);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit derselben Schnittstelle wird mit der `Constructor`-Annotation auf der Schnittstelle definiert. Es kann Klammern und eine Parameterliste geben oder nicht (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird das obige mit dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` angegeben.

Ein weiteres Beispiel für einen unbenannten Konstruktor, mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es kann auch mehrere unbenannte Konstruktoren geben, die sich durch ihre Parameterlisten unterscheiden. Die gesamte Syntax wird auf einer einzigen Unterseite dokumentiert.

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen als seine Schnittstelle hat. Zum Beispiel erzeugt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL mit der `NamedConstructor`-Annotation auf der Schnittstelle definiert, gefolgt vom Konstruktorname nach dem Gleichheitszeichen (`'='`) und den Parametern in den Klammern, im gleichen Format wie Sie es bei Methoden sehen werden.

Es kann mehrere benannte Konstruktoren für eine bestimmte Schnittstelle geben, aber dies ist äußerst selten; in einem solchen Fall fügen wir eine Unterseite pro Namen hinzu.

### Neue Konstruktorsyntax

Seit September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax umfasst keine erweiterte Attributangabe mehr auf der Schnittstelle:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax mit dem Namen `constructor` ohne explizit definierten Rückgabetyp und werden wie folgt geschrieben:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dies bedeutet, dass erweiterte Attribute jetzt auf dem Konstruktor angegeben werden können, und es wird nicht mehr angenommen, dass alle Konstruktoren eine Ausnahme werfen. Wenn ein Konstruktor eine Ausnahme wirft, wird `[Throws]` verwendet, um darauf hinzuweisen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, daher werden Sie wahrscheinlich beide in der Praxis finden. Wir werden daher weiterhin beide Syntaxen hier abdecken.

### Verfügbarkeit in Workern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle oder die partielle Schnittstelle, auf der sie definiert sind. Die Unterseite bietet diese Informationen auf die gleiche Weise wie bei einer Methode.

### Einstellungen

Konstruktoren werden durch dieselbe Einstellung gesteuert wie die Schnittstelle oder partielle Schnittinterface, auf der sie definiert sind. Die Unterseite bietet diese Informationen auf die gleiche Weise wie bei einer Methode.
