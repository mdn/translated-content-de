---
title: Informationen in einer WebIDL-Datei
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

Beim Schreiben von Dokumentation über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte, sowie das Modell, und die Implementierungen beschreiben, was tatsächlich in den Browsern umgesetzt wurde. WebIDL-Dateien sind eine sehr komprimierte Möglichkeit, viele, aber nicht alle Informationen über die API bereitzustellen. Dieses Dokument bietet eine Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist darauf ausgelegt, APIs zu beschreiben. In der breiteren Welt der Informatik gibt es verschiedene Arten von IDL. In der Welt der Browser wird das IDL, das wir verwenden, _WebIDL_ genannt. Es gibt zwei Arten von WebIDL: das im WebIDL-Spezifikationsdokument enthaltene und das in Browsern implementierte. Die Spezifikation ist die kanonische Referenz, und das browser-spezifische WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist, und enthält zusätzliche Dinge wie Annotationen, Informationen über nicht standardmäßige Elemente und browser-spezifische Erweiterungen der IDL-Spezifikation.

## Wo finde ich WebIDL-Dateien?

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr bequeme Art, eine präzise Definition zu vermitteln. Diese beschreiben die Syntax der API. Obwohl die Spezifikation die kanonische Referenz darstellt, sollten wir bedenken, dass sie von der tatsächlichen Implementierung abweichen kann. Auf MDN wollen wir praktisch sein und dokumentieren, was die Webplattform wirklich ist, nicht, was sie idealerweise sein sollte. Überprüfen Sie also, was vorhanden ist, mit Implementierungen (und zögern Sie nicht, Bugs zu melden, wenn Sie Inkohärenzen entdecken).
- Drei Browser-Engines verwenden (modifiziertes) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Vor Chromium-Versionen verwendete Edge es intern, aber diese sind leider nicht öffentlich.

  - Für Gecko sind alle WebIDL-Dateien in einem Verzeichnis zusammengefasst: <https://searchfox.org/mozilla-central/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellbaum, aber sie sind nicht WebIDL, sodass Sie sie ignorieren können. Ältere Versionen von Gecko haben einige ihrer WebIDL-Dateien verstreut, und können sogar Mozillas IDL anstelle von WebIDL verwenden, um einige Webschnittstellen zu beschreiben, aber dies wird in keinem aktuellen Gecko-Code ein Problem darstellen.
  - Für Chromium befinden sie sich an zwei Orten, beide Unterverzeichnisse des Quellcode-Verzeichnisses [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/): [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Der Chromium-Quellcode enthält IDL-Dateien an anderen Stellen, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quellcode verstreut, also müssen Sie etwas graben: z. B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Es wurde jedoch so gestaltet, dass es erweitert werden kann, um mehr Informationen zu übermitteln, und Browseranbieter haben dies getan:

- Für Gecko hat Mozilla eine [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) für seinen dialektalen WebIDL erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt zur Verfügung gestellt.

> [!NOTE]
> Wir beschreiben hier nur den Teil von WebIDL, der am nützlichsten beim Schreiben von Dokumentation ist. Es gibt viele weitere Anmerkungen, die für Implementierungen nützlich sind; lesen Sie die vier oben verlinkten Dokumente, um einen vollständigen Überblick zu erhalten.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die die allgemeinen Merkmale der API beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist die Zeichenfolge, die nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat eine eigene Seite in der Dokumentation, auf der alle Konstruktoren, Eigenschaften und Methoden, die für sie definiert sind, aufgeführt werden.

### Vererbungskette

Der übergeordnete Teil, falls vorhanden, einer gegebenen Schnittstelle wird nach dem Schnittstellennamen und einem Doppelpunkt (`':'`) definiert. Es kann nur einen Elternteil pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgeführt (unter Verwendung des \\{{APIRef}}-Makros). Es kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden sind für mehrere Schnittstellen verfügbar. Um eine Neudefinition zu vermeiden, werden sie in speziellen WebIDL-Schnittstellen definiert, die _mixins_ genannt werden.

Ab September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin`, um eine Mixin-Schnittstelle so zu definieren:

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

Mixins haben keine Vererbung und können keine anderen Mixins einschließen. Sie unterstützen jedoch Teilmengen, sodass Sie Dinge wie folgt sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke verbirgt MDN Mixins. Sie sind abstrakte und spezifikationsbezogene Konstruktionen. Sie können sie nicht in der Browser-Konsole sehen, es ist nützlicher zu wissen, auf welchen echten Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie einem IDL ein Mixin wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils) begegnen, suchen Sie nach den Schnittstellen, die das Mixin implementieren, zum Beispiel [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass anstelle der Dokumentation von `HTMLHyperlinkElementUtils` die Dokumentation zu den konkreten Schnittstellen hinzugefügt wird, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Siehe die folgenden zwei Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenrichtlinie für Mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die Sie möglicherweise noch an einigen Stellen antreffen, werden Mixins mit der `[NoInterfaceObject]`-Annotation vorangestellt:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden auf einer Schnittstelle implementierte Mixins mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in Window und Workern

Die Verfügbarkeit in Web-Workern (jeglicher Art) und im Window-Bereich wird mit einer Annotation definiert: `[Exposed=(Window,Worker)]`. Die Annotation wird auf die partielle Schnittstelle angewendet, mit der sie aufgelistet ist.

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

In diesem Fall ist `Performance.now()` sowohl im `Window`-Bereich als auch in jedem Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht in Web-Workern verfügbar sind.

Die gebräuchlichsten Werte für `[Exposed]` sind:

- `Window`
  - : Die partielle Schnittstelle ist für den globalen Scope der [`Window`](/de/docs/Web/API/Window) verfügbar.
- `Worker`
  - : Die partielle Schnittstelle ist für jede Art von Worker verfügbar, das heißt, wenn der globale Bereich ein Nachkomme von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Es ist auch für `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar und für Firefox intern sind.)
- `DedicatedWorker`
  - : Die partielle Schnittstelle ist nur für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die partielle Schnittstelle ist nur für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die partielle Schnittstelle ist nur für den [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein anderer Wert ist möglich, wie `System`, aber er hat eine [besondere Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]`-Annotation haben. Es bedeutet, dass, wenn ein Objekt dieses Typs als globaler Bereich verwendet wird, jede Schnittstelle, Eigenschaft oder Methode, mit `xyz` als Wert von `[Exposed]`, verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier wird definiert, dass bei einem globalen Bereich vom Typ `DedicatedWorkerGlobalScope`, das heißt, wenn wir uns in einem dedizierten Worker befinden, jede Schnittstelle, Eigenschaft oder Methode exponierbar ist – unter Verwendung der `[Exposed]`-Annotation – zu `Worker` oder `DedicatedWorker`.

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer partiellen Schnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden durch eine Präferenz gesteuert werden (gewöhnlich als "pref" bezeichnet). Dies wird ebenfalls im WebIDL markiert.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier steuert `media.webspeech.synth.enabled` die `SpeechSynthesis`-Schnittstelle und ihre Eigenschaften (die vollständige Auflistung enthält mehr als 3).

> [!NOTE]
> Der Standardwert der Präferenz ist direkt im WebIDL nicht verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

### Nur im System-Code verfügbar

Einige Schnittstellenmerkmale könnten nur im internen Systemcode des Browsers oder Chrome-Code verfügbar sein. Um dies zu signalisieren, verwenden wir in Gecko \[ChromeOnly], zum Beispiel ist die Eigenschaft propName im folgenden Beispiel nur über Chrome-Code aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Sie können die Definition einer Eigenschaft an der Anwesenheit des Schlüsselworts `attribute` erkennen.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumenten sprechen wir von `HTMLMediaElement.error`, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Das Verlinken zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass es den Wert `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies eintreten kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ versehen sein, einer Zeichenfolge, die in eckigen Klammern eingeschlossen ist (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute zeigen spezielles Verhalten an, das im Text beschrieben werden muss. Hier ist eine Liste der Standarderweiterungsattribute von Typen und die Ergänzung, die gemacht werden muss:

- `[LegacyNullToEmptyString]`

  - : Der `null`-Wert wird auf nicht standardmäßige Weise in eine Zeichenfolge konvertiert. Der Standardweg ist, es in die Zeichenfolge `"null"` zu konvertieren, aber in diesem Fall wird es in `""` konvertiert.

    Fügen Sie den folgenden Satz am Ende des Abschnitts _Value_ des Artikels hinzu:

    _Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in die leere Zeichenfolge (`""`) konvertiert, so dass `elt.innerHTML = null` dem entspricht `elt.innerHTML = ""`._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibberechtigungen auf der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht geändert werden. Es muss als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}}-Makro neben seinem Definitionsterm hinzugefügt wird.
- In der ersten Satz auf seiner eigenen Seite, indem die Beschreibung beginnt mit: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_
- Durch den Beginn der Beschreibung auf der Schnittstellenseite mit _Gibt zurück…_

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als 'wertgebend' beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch zum Setzen eines Wertes verwendet werden.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, z.B. wenn einige Werte ungültig sind, kann das Setzen eines neuen Wertes dazu führen, dass eine Ausnahme ausgelöst wird. Dies wird mit dem `[SetterThrows]`-Attribut gekennzeichnet. In diesem Fall _muss_ der Abschnitt Syntax der Eigenschaftsseite einen Unterabschnitt Ausnahmen enthalten. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind im Text in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit gekennzeichnet sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen ungültigen aufgezählten Wert zu setzen](https://webidl.spec.whatwg.org/#es-enumeration) (auf eine JavaScript {{jsxref('String')}} abgebildet) führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Es ist ungewöhnlich, dass Getter Ausnahmen auslösen, obwohl es in einigen wenigen Fällen vorkommt. In diesem Fall wird das `[GetterThrows]`-Attribut verwendet. Auch hier muss der Abschnitt Syntax der Eigenschaftsseite einen Unterabschnitt Ausnahmen enthalten.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen ausführen

Wenn die Semantik von WebIDL nicht eingehalten wird, wird oft eine Ausnahme ausgelöst, selbst ohne `[SetterThrows]` oder `[GetterThrows]` gesetzt. Zum Beispiel, wenn wir im strengen Modus versuchen, einer schreibgeschützten Eigenschaft einen neuen Wert zu geben, das heißt, ihren impliziten Setter aufzurufen, wird eine schreibgeschützte Eigenschaft im strengen Modus ausgelöst.

Hauptsächlich aus Kompatibilitätsgründen ist dieses Verhalten manchmal lästig. Um dies zu verhindern, indem ein no-op-Setter erstellt wird (das heißt, indem jeder Versuch, der Eigenschaft einen neuen Wert zu geben, stillschweigend ignoriert wird), kann das `[LenientSetter]`-Attribut verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird ein zusätzlicher Satz zur Beschreibung der Eigenschaft hinzugefügt. Z.B.:

_Obwohl diese Eigenschaft schreibgeschützt ist, wird sie nicht ausgelöst, wenn sie geändert wird (auch nicht im strengen Modus); der Setter ist eine No-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz auf ein internes Objekt sein.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (ein IDL `DOMString`, oder andere), {{jsxref("Number")}} (ein IDL `byte`, `octet`, `unsigned int`, oder andere) und {{jsxref("Boolean")}} werden immer kopiert und es muss nichts Besonderes über sie vermerkt werden (es ist ein natürliches Verhalten, das von einem JavaScript-Entwickler erwartet wird).

Für Schnittstellenobjekte ist das Standardverhalten, eine _Referenz_ auf das interne Objekt zurückzugeben. Dies muss sowohl in der kurzen Beschreibung auf der Schnittstellenseite, als auch in der Beschreibung auf den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, bezieht sich auf die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, selbst wenn sie in der relevanten Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen zurückgeben. Dies wird im WebIDL durch das `[NewObject]`-Attribut angegeben.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: Eine Änderung daran ändert nicht den internen Wert und eine Änderung im internen Wert wirkt sich nicht auf jede Objektinstanz aus. In der Dokumentation werden wir es durch das Adjektiv _neu_ neben dem Objekt kennzeichnen:

_Die **`HTMLMediaElement.buffered`**-schreibgeschützte Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Fall einer Referenz auf ein Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir es explizit, dass Änderungen an dem zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sind. Um dies zu markieren, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollections`, oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch in der Unterseite.

Z.B.:

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine live \\{{domxref("HTMLFormControlsCollection")}} zurück, die…

### Verfügbarkeit in Arbeitern

Auch die Verfügbarkeit einzelner Eigenschaften in Arbeitern wird im WebIDL gefunden. Für eine Eigenschaft ist der Standard dieselbe Verfügbarkeit wie die `interface` (die nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar ist, wenn nichts Spezielles markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist oder nicht, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies wird ebenfalls im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die `textTracks`-Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist direkt im WebIDL nicht verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

## Methoden

Sie können die Definition einer Methode an der Anwesenheit von Klammern nach dem Namen erkennen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType` und wir werden sie als `HTMLMediaElement.canPlayType()` (mit den Klammern, die anzeigen, dass es sich um eine Methode handelt) in den Dokumenten bezeichnen, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Das Verlinken zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType()')}} oder **ohne** das Präfix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer enthalten sein.

### Parameter

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode werden im Abschnitt Syntax der Unterseite der Methode aufgelistet. Sie sind im WebIDL in Reihenfolge, zwischen den Klammern, als kommaseparierte Liste aufgelistet. Jeder Parameter hat einen Namen (wie oben angegeben) und einen Typ (z.B. ein `'?'` bedeutet, dass der `null`-Wert gültig ist.) Wenn als `optional` markiert, ist der Parameter optional einzuschließen in einem Methodenaufruf und muss das \\{{OptionalInline}}-Flag enthalten haben, wenn er im Abschnitt Syntax aufgelistet wird. Der Standardwert des Parameters wird hinter dem Gleichheitszeichen (`'='`) aufgelistet.

Parametertypen können spezielles Verhalten beschreiben, das mit erweiterten Attributen beschrieben wird (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und die Ergänzung, die Sie im Text vornehmen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie den folgenden Satz am Ende der Parameterbeschreibung hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie die leere Zeichenfolge (`""`)._

### Typ des Rückgabewerts

```webidl
DOMString canPlayType(DOMString type);
```

Der Rückgabewerttyp wird vor dem Methodennamen angegeben — im obigen Beispiel ist der Wert ein Objekt vom Typ `DOMString`. Wenn der Rückgabetyp von einem Fragezeichen (`'?'`) gefolgt wird, kann auch ein Wert von `null` zurückgegeben werden, und die Dokumentation muss erklären, _wann_ dies eintreten kann. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das `void`-Schlüsselwort ist, bedeutet dies, dass es keinen Rückgabewert gibt. Es ist kein Rückgabewerttyp. Wenn im WebIDL der Eintrag `void` steht, sollte der _Rückgabewert_-Abschnitt in den Dokumenten einfach "Kein (\{{jsxref("undefined")}})." angeben.

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird mit der `[Throws]`-Annotation gekennzeichnet. Wenn dies geschieht, _muss_ der Abschnitt Syntax der Methoden-Seite einen Unterabschnitt Ausnahmen enthalten. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind im Text in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit gekennzeichnet sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen ungültigen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (auf einen JavaScript {{jsxref('String')}} abgebildet) als Parameter zu setzen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Sehen Sie sich einen dieser [_Exceptions_-Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Arbeitern

Auch die Verfügbarkeit einzelner Methoden in Arbeitern wird im WebIDL gefunden. Für eine Methode ist der Standard dieselbe Verfügbarkeit wie die `interface` (die nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar ist, wenn nichts Spezielles markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies wird ebenfalls im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die `addTextTrack()`-Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist direkt im WebIDL nicht verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

## Besondere Methoden

Einige Methoden werden nicht als reguläre Methoden im WebIDL aufgelistet, sondern als spezielle Schlüsselwörter, die in spezifische Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifier gibt an, wie ein Objekt, das auf einer Schnittstelle basiert, in Kontexten, die eine Zeichenfolge erwarten, aufgelöst wird. (Siehe den Abschnitt [Stringifiers](#stringifier).) Zusätzlich wird das Schlüsselwort auf `toString()` abgebildet und definiert als:

```webidl
stringifier;
```

Die `toString()`-Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z. B. [`Range.toString()`](/de/docs/Web/API/Range/toString)).

Ein Jsonifier wird auf `toJSON()` abgebildet und definiert als:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()`-Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z. B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON)).

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur der nicht standardmäßige, wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterable_ definiert werden, was bedeutet, dass sie die folgenden Methoden haben wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei Arten der Iteration: den _Wert-Iterator_ und den _Paar-Iterator._

#### Wert-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte eines Typs _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Indizes (die `unsigned long` sind) zurückgibt.
- `values()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Werten zurückgibt.
- `keys()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Schlüsseln, die ihre Indizes sind (die `unsigned long` sind), zurückgibt. Im Falle von Wert-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, die eine gegebene Rückruffunktion einmal für jedes Element in der Liste ausführt.

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein.

Die Werte, über die iteriert werden soll, können auf folgende Weise definiert werden:

- In der WebIDL-Datei, unter Verwendung der `iterable<valueType>`-Notation. Zum Beispiel siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit in der WebIDL-Datei, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angezeigt, wenn die Schnittstelle `getter`-Methoden mit einem Parameter des Typs `unsigned long` enthält.
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text wird typischerweise in der Spezifikation gefunden und beginnt normalerweise mit: _"The [values to iterate over](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte eines Typs _valueType_ mit Schlüsseln eines Typs _keyType_, das heißt den Wertpaaren, iterieren. Die generierten Methoden werden sein:

- `entries()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Wertpaaren zurückgibt. Beispielsweise siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Werten zurückgibt. Beispielsweise siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Schlüsseln zurückgibt. Beispielsweise siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, die eine gegebene Rückruffunktion einmal für jedes Element in der Liste ausführt. Beispielsweise siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein. Z.B. [`FormData`](/de/docs/Web/API/FormData).

Die Wertpaare, über die iteriert werden soll, können auf folgende Weise definiert werden:

- In der WebIDL-Datei, unter Verwendung der `iterable<keyType, valueType>`-Notation. Beispielsweise siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text wird typischerweise in der Spezifikation gefunden und beginnt normalerweise mit: _"The [value pairs to iterate over](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_

### Set-ähnliche Methoden

Eine Schnittstelle kann als _Set-ähnlich_ definiert werden, was bedeutet, dass sie eine _geordnete Menge von Werten_ darstellt und die folgenden Methoden haben wird: `entries()`, `keys()`, `values()`, `forEach()` und `has()` (sie hat auch die `size`-Eigenschaft). Sie unterstützt auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Die Set-ähnliche kann `readonly` sein oder nicht. Wenn nicht schreibgeschützt, werden auch die Methoden zum Ändern des Sets implementiert: `add()`, `clear()` und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Indizes zurückgibt. Beispielsweise siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Werten zurückgibt. Beispielsweise siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Schlüsseln zurückgibt. Beispielsweise siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, die eine gegebene Rückruffunktion einmal für jedes Element in der Liste ausführt. Beispielsweise siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die Set-ähnliche Deklaration nicht mit schreibgeschützt gekennzeichnet ist, werden auch die folgenden Methoden generiert:

- `add()`, die einen Eintrag hinzufügt. Z.B. die `.add()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()`, die die Set-ähnliche Struktur leert. Z.B. die `.clear()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()`, die einen Eintrag entfernt. Z.B. die `.delete()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche Set-Schnittstelle erlaubt auch die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`.

## Spezielle Verhaltensweisen

Einige IDL-Mitglieder zeigen spezielle Verhaltensweisen, die auf entsprechenden Seiten vermerkt werden sollten.

### Stringifier

Zusätzlich zum Hinzufügen der `toString()`-Methode zu einer Schnittstelle, wie in [toString() und toJSON()](#tostring_and_tojson) beschrieben, geben Stringifier auch an, dass eine Objektinstanz, wenn sie als Zeichenfolge verwendet wird, eine andere Zeichenfolge als die Standardzeichenfolge zurückgibt. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts). Genau wie hängt von der Art und Weise ab, wie es im IDL spezifiziert ist. Unabhängig davon, wie, sollte das nicht standardmäßige Verhalten auf der Schnittstellenseite beschrieben werden.

Wenn das Schlüsselwort `stringifier` mit einem Attributnamen begleitet wird, hat das Referenzieren des Objektnamens das gleiche Ergebnis wie das Referenzieren des Attributnamens. Betrachten Sie das folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse, die auf dieser Schnittstelle basiert, sind die folgenden Codezeilen gleichwertig. Das Verhalten sollte auf der Eigenschaftsseite zusätzlich zur Schnittstelleseite vermerkt werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das Schlüsselwort `stringifier` für sich alleine verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten wird im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu erfahren, was eine Schnittstellenreferenz tatsächlich tut, verweisen Sie auf die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind im WebIDL etwas versteckt: Sie sind als Anmerkungen der Hauptschnittstelle aufgelistet.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer gegebenen Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit derselben Schnittstelle wird durch das `Constructor`-Attribut der Schnittstelle definiert. Es können Klammern und eine Parameterliste vorhanden sein oder nicht (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — beispielsweise wird das obige mit dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` gegeben.

Ein weiteres Beispiel für einen unbenannten Konstruktor mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es kann auch mehrere unbenannte Konstruktoren geben, die sich durch ihre Parameterlisten unterscheiden. Alle Syntax wird auf einer einzigen Unterseite dokumentiert.

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen als den seiner Schnittstelle hat. Zum Beispiel erstellt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL durch das `NamedConstructor`-Attribut der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und dem Parameter innerhalb der Klammern, im gleichen Format, wie Sie es bei Methoden sehen.

Es kann mehrere benannte Konstruktoren für eine spezifische Schnittstelle geben, aber das ist äußerst selten; in einem solchen Fall schließen wir eine Unterseite pro Name ein.

### Neue Konstruktorsyntax

Ab September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax beinhaltet keine erweiterte Eigenschaft mehr für die Schnittstelle:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax namens `constructor` ohne explizit definierten Rückgabewert, geschrieben wie folgt:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dies bedeutet, dass erweiterte Eigenschaften jetzt auf den Konstruktor angewendet werden können, und es wird nicht mehr davon ausgegangen, dass alle Konstruktoren Ausnahmen auslösen. Wenn ein Konstruktor dies tut, wird `[Throws]` verwendet, um dies anzugeben:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, also werden Sie wahrscheinlich beide in der Wildnis finden. Wir werden daher weiterhin beide Arten von Syntax hier abdecken.

### Verfügbarkeit in Arbeitern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle oder partielle Schnittstelle, auf der sie definiert sind. Die Unterseite bietet diese Information auf dieselbe Weise wie bei einer Methode.

### Präferenzen

Konstruktoren werden durch die gleiche Präferenz wie die Schnittstelle oder partielle Schnittstelle, auf der sie definiert sind, gesteuert. Die Unterseite bietet diese Information auf dieselbe Weise wie bei einer Methode.
