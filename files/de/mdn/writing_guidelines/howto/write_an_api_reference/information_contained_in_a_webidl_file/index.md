---
title: Informationen, die in einer WebIDL-Datei enthalten sind
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Beim Schreiben von Dokumentationen über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte, sowie das Modell, und die Implementierungen beschreiben, was tatsächlich in den Browsern umgesetzt wurde. WebIDL-Dateien sind eine sehr komprimierte Art und Weise, viele, aber nicht alle Informationen über die API zu geben. Dieses Dokument bietet eine Referenz, die dabei hilft, die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist dazu gedacht, APIs zu beschreiben. In der größeren Welt der Informatik gibt es mehrere Arten von IDL. In der Browserwelt nennen wir die IDL, die wir verwenden, _WebIDL_. Es gibt zwei Arten von WebIDL: Die in der WebIDL-Spezifikation angegebene und die, die in Browsern implementiert ist. Die Spezifikation ist die kanonische Referenz, und die Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist und enthält zusätzliche Dinge wie Annotationen, Informationen über nicht standardisierte Elemente und browserspezifische Erweiterungen der IDL-Spezifikation.

## Wo man WebIDL-Dateien findet

WebIDL kann an verschiedenen Orten gefunden werden:

- Jede Spezifikation enthält WebIDL innerhalb des Textes: Es ist eine sehr bequeme Möglichkeit, präzise Definitionen zu vermitteln. Diese beschreiben die Syntax der API. Obwohl die kanonische Referenz, müssen wir im Hinterkopf behalten, dass sie von der tatsächlichen Implementierung abweichen können. Auf MDN wollen wir praktisch sein und dokumentieren, was die Web-Plattform wirklich ist, nicht was sie idealerweise sein sollte. Überprüfen Sie daher, was dort mit Implementierungen vorhanden ist (und zögern Sie nicht, Fehler zu melden, wenn Sie Inkohärenzen entdecken).
- Drei Browser-Engines verwenden (modifizierte) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Pre-Chromium-Versionen von Edge verwendeten es intern, aber diese sind leider nicht öffentlich.

  - Für Gecko sind alle WebIDL-Dateien in einem Verzeichnis gruppiert: <https://searchfox.org/mozilla-central/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quelltextbaum, aber sie sind nicht WebIDL, also können Sie diese ignorieren. Ältere Versionen von Gecko haben einige ihrer WebIDL-Dateien verstreut und verwenden möglicherweise sogar Mozilla's IDL anstelle von WebIDL, um einige Web-Oberflächen zu beschreiben, aber dies wird in keinem neueren Gecko-Code ein Problem darstellen.
  - Für Chromium befinden sie sich an zwei Orten, beide Unterverzeichnisse des Quellcodes' [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/) Verzeichnisses: [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Chromium-Quellcode hat IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quelltext verstreut, daher muss man etwas mehr graben: E.g. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Es wurde jedoch so gestaltet, dass es erweitert werden kann, um mehr Informationen zu übermitteln, und Browser-Anbieter haben dies getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDL erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple ebenfalls eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt bereitgestellt.

> [!NOTE]
> Wir beschreiben hier nur den WebIDL-Teil, der beim Schreiben von Dokumentationen am nützlichsten ist. Es gibt noch viele weitere Anmerkungen, die für Implementierer nützlich sind; beziehen Sie sich auf die vier oben verlinkten Dokumente, um einen vollständigen Überblick zu erhalten.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die die allgemeinen API-Funktionen beschreibt.

### Name der Schnittstelle

Der Name der Schnittstelle ist die Zeichenfolge, die nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, auf der jeder Konstruktor, jede Eigenschaft und jede Methode aufgeführt ist, die dafür definiert sind.

### Vererbungskette

Das Elternteil einer gegebenen Schnittstelle, falls vorhanden, wird nach dem Schnittstellennamen und einem Doppelpunkt (`':'`) definiert. Es kann nur ein Elternteil pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgeführt (unter Verwendung des \\{{APIRef}} Makros). Sie kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden sind für mehrere Schnittstellen verfügbar. Um eine erneute Definition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen, sogenannten _Mixins_, definiert.

Ab September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin`, um eine Mixin-Schnittstelle zu definieren, folgendermaßen:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Sie verwenden dann das Schlüsselwort `includes`, um auszudrücken, dass die innerhalb eines Mixin definierten Eigenschaften auf einer Schnittstelle verfügbar sind:

```webidl
MyInterface includes MyMixin;
```

Mixins haben keine Vererbung und können keine anderen Mixins einschließen. Sie unterstützen jedoch Partials, daher werden Sie Dinge wie Folgendes sehen:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke verbirgt MDN Mixins. Sie sind abstrakte und nur in Spezifikationen verwendete Konstrukte.
Sie können sie nicht in der Browserkonsole sehen und es ist nützlicher zu wissen, auf welchen realen Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie in IDL auf ein Mixin stoßen, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils),
suchen Sie nach den Schnittstellen, die das Mixin implementieren, zum Beispiel
[HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass Sie statt `HTMLHyperlinkElementUtils` zu dokumentieren, die Dokumentation zu den konkreten Schnittstellen hinzufügen, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Siehe die folgenden zwei Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenrichtlinie für Mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die Sie möglicherweise noch an einigen Stellen antreffen, werden Mixins mit der Annotation `[NoInterfaceObject]` vorangestellt:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf einer Schnittstelle implementiert sind, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in Fenster und Workern

Die Verfügbarkeit in Web-Workern (jeglicher Art) und im Fensterbereich wird mit einer Annotation definiert: `[Exposed=(Window,Worker)]`. Die Annotation gilt für die partielle Schnittstelle, mit der sie aufgeführt ist.

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

In diesem Fall ist `Performance.now()` im `Window`-Bereich und für jeden Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Web-Worker verfügbar sind.

Die häufigsten Werte für `[Exposed]` sind:

- `Window`
  - : Die partielle Schnittstelle ist für den [`Window`](/de/docs/Web/API/Window)-global Bereich verfügbar.
- `Worker`
  - : Die partielle Schnittstelle ist für jede Art von Worker verfügbar, d.h. wenn der globale Bereich ein Nachkomme von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Sie ist auch für `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie auf dem Web nicht sichtbar und intern für Firefox sind.)
- `DedicatedWorker`
  - : Die partielle Schnittstelle ist nur für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die partielle Schnittstelle ist nur für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die partielle Schnittstelle ist nur für den [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein weiterer Wert ist möglich, wie `System`, aber dies hat eine [besondere Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]` Annotation haben. Dies bedeutet, wenn ein Objekt dieses Typs als globaler Bereich verwendet wird, ist jede Schnittstelle, Eigenschaft oder Methode mit `xyz` als Wert von `[Exposed]` verfügbar.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier ist definiert, dass, wenn der globale Bereich vom Typ `DedicatedWorkerGlobalScope` ist, d.h. wenn wir in einem dedizierten Worker sind, jede Schnittstelle, Eigenschaft oder Methode, die — unter Verwendung der `[Exposed]` Annotation — für `Worker` oder `DedicatedWorker` verfügbar ist, verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer partielle Schnittstelle, einschließlich ihrer Konstruktoren, Eigenschaften und Methoden, durch eine Präferenz gesteuert werden (normalerweise "pref" genannt). Dies ist auch im WebIDL vermerkt.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier steuert `media.webspeech.synth.enabled` die `SpeechSynthesis` Schnittstelle und ihre Eigenschaften (die vollständige Liste hat mehr als 3.)

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

### Nur im Systemcode verfügbar

Einige Schnittstellenfunktionen sind möglicherweise nur im internen Systemcode des Browsers oder im Chrome-Code verfügbar. Um dies zu kennzeichnen, verwenden wir in Gecko \[ChromeOnly], zum Beispiel ist die Eigenschaft propName im folgenden Beispiel nur über Chrome-Code aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Sie können die Definition einer Eigenschaft an dem Vorhandensein des Schlüsselworts `attribute` erkennen.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumenten beziehen wir uns darauf als `HTMLMediaElement.error`, da es zur `HTMLMediaElement` Schnittstelle gehört. Verlinkungen zur Seite erfolgen entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix unter Verwendung von \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass es den Wert `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies der Fall sein kann. Ist kein Fragezeichen vorhanden, kann die `error` Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ versehen sein, einer Zeichenfolge, die in eckige Klammern eingeschlossen ist (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute weisen auf spezielle Verhaltensweisen hin, die im Text beschrieben werden müssen. Hier ist eine Liste von Standarderweiterungsattributen von Typen und der Ergänzung, die gemacht werden muss:

- `[LegacyNullToEmptyString]`

  - : Der `null` Wert wird auf nicht standardmäßige Weise in einen String umgewandelt. Der Standardweg ist es, ihn in den `"null"` String umzuwandeln, aber in diesem Fall wird er in `""` umgewandelt.

    Fügen Sie den folgenden Satz an das Ende des Abschnitts _Wert_ des Artikels hinzu:

    _Wenn auf den `null` Wert gesetzt, wird dieser `null` Wert in den leeren String (`""`) umgewandelt, sodass `elt.innerHTML = null` dem `elt.innerHTML = ""` entspricht._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibberechtigungen für die Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht geändert werden. Sie muss als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}} Makro neben seinem Definitionsterm hinzugefügt wird.
- In dem ersten Satz seiner eigenen Seite, indem die Beschreibung mit: _Die schreibgeschützte **`HTMLMediaElement.error`** Eigenschaft…_ beginnt.
- Indem seine Beschreibung auf der Schnittstellenseite mit _Gibt zurück…_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als 'Wert zurückgebend' beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert zu setzen.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, beispielsweise wenn einige Werte unzulässig sind, kann das Einstellen eines neuen Werts dazu führen, dass eine Ausnahme ausgelöst wird. Dies wird mit der `[SetterThrows]` Annotation markiert. Wenn dies passiert, _muss_ der Syntax-Abschnitt der Eigenschaftsseite einen Abschnitt Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als textliche Information in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert sind. [Der Versuch, einen unzulässigen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) zu setzen, führt zu einer {{jsxref('TypeError')}} Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Es ist ungewöhnlich, dass Getter Ausnahmen auslösen, obwohl es in einigen wenigen Fällen vorkommt. In diesem Fall wird die `[GetterThrows]` Annotation verwendet. Auch hier _muss_ der Syntax-Abschnitt der Eigenschaftsseite einen Abschnitt Ausnahmen haben.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen auslösen

Wenn die Semantik von WebIDL nicht befolgt wird, wird oft eine Ausnahme ausgelöst, selbst wenn `[SetterThrows]` oder `[GetterThrows]` nicht gesetzt sind. Beispielsweise, wenn wir versuchen, eine schreibgeschützte Eigenschaft auf einen neuen Wert zu setzen, das heißt der implizierte Setter wird aufgerufen, wird eine schreibgeschützte Eigenschaft in einem strikten Mode soweit geworfen.

Meist aus Kompatibilitätszwecken, ist dieses Verhalten manchmal ärgerlich. Um dies zu verhindern, indem man einen Nicht-Operations-Setter erstellt (d.h. indem man jeden Versuch, die Eigenschaft auf einen neuen Wert zu setzen, stillschweigend ignoriert), kann die `[LenientSetter]` Annotation verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird der Beschreibung der Eigenschaft ein zusätzlicher Satz hinzugefügt, z.B.

_Obwohl diese Eigenschaft schreibgeschützt ist, wird sie nicht werfen, wenn sie geändert wird (auch im strikten Modus); der Setter ist eine Nicht-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz zu einem internen Objekt sein.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (dies ist ein IDL `DOMString`, oder andere), {{jsxref("Number")}} (dies ist ein IDL `byte`, `octet`, `unsigned int` oder andere) und {{jsxref("Boolean")}} werden immer kopiert und es muss nichts besonderes darüber vermerkt werden (es ist das natürliche Verhalten, das von einem JavaScript-Entwickler erwartet wird.)

Für Schnittstellenobjekte ist es standardmäßig, eine _Referenz_ auf das interne Objekt zurückzugeben. Dies muss sowohl in der kurzen Beschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, gilt für die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, auch wenn sie in der relevanten Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dies wird im WebIDL mit der `[NewObject]` Annotation angegeben.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: Eine Änderung wird den internen Wert nicht ändern, und eine Änderung des internen Werts wird jede Objektinstanz nicht beeinflussen. In der Dokumentation markieren wir es, indem wir das Adjektiv _neu_ neben Object verwenden:

_Die **`HTMLMediaElement.buffered`** schreibgeschützte Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}} Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}} Objekt zurück, das …_

Im Fall einer Referenz zu einem Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`) machen wir ausdrücklich darauf aufmerksam, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sind. Um dies zu markieren, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollections` oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch auf der Unterseite.

Zum Beispiel.

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine live \\{{domxref("HTMLFormControlsCollection")}} zurück, die…

### Verfügbarkeit in Workern

Die individuelle Verfügbarkeit von Eigenschaften in Workern wird auch im WebIDL gefunden. Für eine Eigenschaft ist der Standard die gleiche Verfügbarkeit wie die `interface` (d.h. verfügbar nur im [`Window`](/de/docs/Web/API/Window) Kontext, wenn nichts spezielles markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist oder nicht, direkt vor dem "Syntax"-Abschnitt.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit bestimmter Eigenschaften durch eine Präferenz gesteuert werden. Dies ist auch im WebIDL vermerkt.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die `textTracks` Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

## Methoden

Sie können die Definition einer Methode am Vorhandensein von Klammern nach dem Namen erkennen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir werden uns in den Dokumenten darauf beziehen als `HTMLMediaElement.canPlayType()` (mit den Klammern, die darauf hinweisen, dass es sich um eine Methode handelt), da es zur `HTMLMediaElement` Schnittstelle gehört. Verlinkungen zur Seite erfolgen entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Präfix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer enthalten sein.

### Parameter

```js
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode sind im Abschnitt Syntax der Methoden-Unterseite aufgelistet. Sie sind im WebIDL in der Reihenfolge, zwischen den Klammern, als kommaseparierte Liste aufgeführt. Jeder Parameter hat einen Namen (oben angegeben) und einen Typ (z.B. ein `'?'` bedeutet, dass der `null` Wert gültig ist.) Wenn mit `optional` markiert, ist der Parameter optional in einem Methodenaufruf enthalten und muss das \\{{OptionalInline}} Flag enthalten, wenn er im Syntax-Abschnitt aufgeführt ist. Der Standardwert des Parameters ist nach dem Gleichheitszeichen (`'='`) aufgeführt.

Parametertypen können spezielle Verhaltensweisen haben, die mit erweiterten Attributen (wie `[LegacyNullToEmptyString]`) beschrieben werden. Hier ist die Liste solcher Attribute und die Ergänzung, die Sie im Text vornehmen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie den folgenden Satz am Ende der Parameterbeschreibung hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird wie der leere String (`""`) behandelt._

### Rückgabewerttyp

```webidl
DOMString canPlayType(DOMString type);
```

Der Rückgabewerttyp wird vor dem Methodennamen angegeben - im obigen Fall ist der Wert ein Objekt vom Typ `DOMString`. Wenn der Rückgabewert von einem Fragezeichen (`'?'`) gefolgt wird, kann auch ein Wert von `null` zurückgegeben werden und die Dokumentation muss erklären, _wann_ dies der Fall sein kann. Ist kein Fragezeichen vorhanden, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das Schlüsselwort `void` ist, bedeutet dies, dass kein Rückgabewert vorliegt. Es ist kein Rückgabewerttyp. Wenn der WebIDL-Eintrag `void` liest, sollte der _Rückgabewert_-Abschnitt im Text einfach "Keine (\{{jsxref("undefined")}}).".

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird mit der `[Throws]` Annotation markiert. Wenn dies passiert, _muss_ der Syntax-Abschnitt der Methodenseite einen Abschnitt Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als textliche Information in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert sind. [Der Versuch, einen unzulässigen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) als Parameter zu setzen, führt zu einer {{jsxref('TypeError')}} Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Schauen Sie sich einen dieser [_Exceptions_ Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Workern

Die individuelle Verfügbarkeit von Methoden in Workern ist auch im WebIDL zu finden. Für eine Methode ist der Standard die gleiche Verfügbarkeit wie die `interface` (d.h. verfügbar nur im [`Window`](/de/docs/Web/API/Window) Kontext, wenn nichts spezielles markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist, direkt vor dem Syntax-Abschnitt.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit bestimmter Methoden durch eine Präferenz gesteuert werden. Dies ist auch im WebIDL vermerkt.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die `addTextTrack()` Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

## Besondere Methoden

Einige Methoden sind nicht als reguläre Methoden in WebIDL aufgeführt, sondern stattdessen als spezielle Schlüsselwörter, die in bestimmte standardmäßige JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifier gibt an, wie ein auf einer Schnittstelle basierendes Objekt in Kontexten, die einen String erwarten, aufgelöst wird. (Siehe den Abschnitt [Stringifiers](#stringifiers).) Zusätzlich wird das Schlüsselwort auf `toString()` abgebildet und wie folgt definiert:

```webidl
stringifier;
```

Die `toString()` Methode ist wie jede andere Methode der Schnittstelle aufgeführt und hat ihre eigene Unterseite (z.B. [`Range.toString()`](/de/docs/Web/API/Range/toString))

Ein Jsonifier wird auf `toJSON()` abgebildet und wird wie folgt definiert:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()` Methode ist wie jede andere Methode der Schnittstelle aufgeführt und hat ihre eigene Unterseite (z.B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON))

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet - nur der nicht standardmäßige wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterable_ definiert sein, was bedeutet, dass sie die folgenden Methoden hat: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung der {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei mögliche Arten der Iteration: den _Wert-Iterator_ und den _Paar-Iterator._

#### Wert-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte des Typs _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Indizes (die `unsigned long` sind) zurückgibt.
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt.
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt, die seine Indizes (die `unsigned long` sind) sind. Im Fall von Wert-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, die eine gegebene Rückruffunktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator ermöglicht die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen der Schnittstellenbeschreibung einen Satz darüber hinzu.

Die Werte, über die iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- Im WebIDL-Dokument, unter Verwendung der `iterable<valueType>` Notation. Zum Beispiel, siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit im WebIDL-Dokument, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angezeigt, wenn die Schnittstelle `getter`-Methoden mit einem Parameter des Typs `unsigned long` umfasst.
- Außerhalb des WebIDL-Dokuments, im begleitenden Text. Ein solcher Text ist normalerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"Die [über die zu iterierenden Werte](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte des Typs _valueType_ mit Schlüsseln des Typs _keyType_ iterieren, das sind die Wertpaare. Die generierten Methoden werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Wertpaare zurückgibt. Zum Beispiel, siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel, siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel, siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, die eine gegebene Rückruffunktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator ermöglicht die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen der Schnittstellenbeschreibung einen Satz darüber hinzu. E.g. [`FormData`](/de/docs/Web/API/FormData).

Die Wertpaare, über die iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- Im WebIDL-Dokument, unter Verwendung der `iterable<keyType, valueType>` Notation. Zum Beispiel, siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb des WebIDL-Dokuments, im begleitenden Text. Ein solcher Text ist typischerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"Die [zur Iteration definierten Wertpaare](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Methoden ähnlich wie Mengen

Eine Schnittstelle kann als _mengenartig_ definiert sein, was bedeutet, dass sie eine _geordnete Menge von Werten_ darstellt und die folgenden Methoden haben: `entries()`, `keys()`, `values()`, `forEach()`, und `has()` (sie hat auch die `size` Eigenschaft). Sie unterstützen auch die Verwendung der {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Der mengenartige kann entweder readonly oder nicht sein. Wenn nicht schreibgeschützt, sind die Methoden zum Ändern der Menge ebenfalls implementiert: `add()`, `clear()`, und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Indizes zurückgibt. Zum Beispiel, siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel, siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel, siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, die eine gegebene Rückruffunktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die mengenartige Deklaration nicht von readonly vorangestellt ist, werden die folgenden Methoden ebenfalls generiert:

- `add()`, die einen Eintrag hinzufügt. Z.B. die `.add()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()`, die die mengenartige Struktur leert. Z.B. die `.clear()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()`, die einen Eintrag entfernt. Z.B. die `.delete()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche Mengen-Schnittstelle ermöglicht auch die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`.

## Besondere Verhaltensweisen

Einige IDL-Mitglieder zeigen besondere Verhaltensweisen an, die auf den entsprechenden Seiten vermerkt werden sollten.

### Stringifiers

Zusätzlich zur Hinzufügung der `toString()` Methode zu einer Schnittstelle, wie im Abschnitt [toString() und toJSON()](#tostring_and_tojson) beschrieben, zeigt ein Stringifier auch an, dass eine Objektinstanz, wenn sie als String verwendet wird, einen anderen String als den Standard zurückgibt. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts). Wie genau hängt davon ab, wie es in der IDL spezifiziert ist. Unabhängig davon, wie, sollte das nicht standardmäßige Verhalten auf der Schnittstellenseite beschrieben werden.

Wenn das Schlüsselwort `stringifier` mit einem Eigenschaftsnamen begleitet wird, hat der Verweis auf den Objektnamen das gleiche Ergebnis wie der Verweis auf den Eigenschaftsnamen. Betrachten Sie das folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse, die auf dieser Schnittstelle basiert, sind die folgenden Codezeilen gleichwertig. Das Verhalten sollte auf der Eigenschaften-Seite zusätzlich zur Schnittstellenseite vermerkt werden.

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

Um zu erfahren, was ein Schnittstellenverweis tatsächlich tut, konsultieren Sie die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um ihr Ergebnis zu bestimmen.

## Konstruktoren

Konstruktoren sind im WebIDL etwas versteckt: Sie sind als Annotationen der Hauptschnittstelle aufgeführt.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer gegebenen Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit derselben Schnittstelle wird mit der `Constructor` Annotation auf der Schnittstelle definiert. Es können Klammern und eine Liste von Parametern vorhanden sein oder nicht (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird das obige mit dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` versehen.

Ein weiteres Beispiel eines unbenannten Konstruktors mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es kann auch mehrere unbenannte Konstruktoren geben, die sich in ihren Parameterlisten unterscheiden. Die gesamte Syntax wird auf einer einzigen Unterseite dokumentiert.

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen als den seiner Schnittstelle hat. Zum Beispiel `new Image(…)` erstellt ein neues `HTMLImageElement` Objekt. Sie werden im WebIDL mit der `NamedConstructor` Annotation auf der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und den Parameter innerhalb der Klammern, im gleichen Format, das Sie bei Methoden sehen werden.

Es kann mehrere benannte Konstruktoren für eine spezifische Schnittstelle geben, aber dies ist extrem selten; in einem solchen Fall beinhalten wir eine Unterseite pro Name.

### Neue Konstruktorsyntax

Ab September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Syntax der Konstruktoren beinhaltet keine erweiterte Attribut auf der Schnittstelle mehr:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax namens `constructor` ohne explizit definierten Rückgabewert, wie folgt geschrieben:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dies bedeutet, dass erweiterte Attribute jetzt auf dem Konstruktor angegeben werden können, und es wird nicht mehr angenommen, dass alle Konstruktoren werfen. Wenn ein Konstruktor wirft, wird `[Throws]` verwendet, um dies anzuzeigen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, daher werden Sie wahrscheinlich beide in der freien Wildbahn begegnen. Wir werden daher weiterhin beide Arten der Syntax hier abdecken.

### Verfügbarkeit in Workern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle, oder partielle Schnittstelle, auf der sie definiert sind. Die Unterseite bietet diese Information auf die gleiche Weise wie für eine Methode.

### Präferenzen

Konstruktoren werden von der gleichen Präferenz gesteuert wie die Schnittstelle, oder partielle Schnittstelle, auf der sie definiert sind. Die Unterseite bietet diese Information auf die gleiche Weise wie für eine Methode.
