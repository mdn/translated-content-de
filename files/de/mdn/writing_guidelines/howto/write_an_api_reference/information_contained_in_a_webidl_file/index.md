---
title: Informationen in einer WebIDL-Datei
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Bei der Dokumentation einer API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden soll, ebenso wie das Modell, und die Implementierungen beschreiben, was tatsächlich in den Browsern eingebaut wurde. WebIDL-Dateien sind eine sehr komprimierte Möglichkeit, viele, aber nicht alle Informationen über die API bereitzustellen. Dieses Dokument bietet eine Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist so konzipiert, dass es APIs beschreibt. In der breiteren Welt der Datenverarbeitung gibt es mehrere Arten von IDL. In der Welt der Browser wird die IDL, die wir verwenden, _WebIDL_ genannt. Es gibt zwei Arten von WebIDL: Die, die in der WebIDL-Spezifikation angegeben ist, und die, die in Browsern implementiert ist. Die Spezifikation ist die kanonische Referenz, und die Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist, und enthält zusätzliche Informationen wie Anmerkungen, Informationen über nicht standardisierte Elemente und browserspezifische Erweiterungen der IDL-Spezifikation.

## Wo man WebIDL-Dateien findet

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL innerhalb des Textes: Es ist ein sehr praktischer Weg, um präzise Definitionen zu vermitteln. Diese beschreiben die Syntax der API. Obwohl die kanonische Referenz, müssen wir bedenken, dass sie sich von der tatsächlichen Implementierung unterscheiden kann. Auf MDN wollen wir praktisch sein und dokumentieren, was die Web-Plattform wirklich ist, nicht was sie idealerweise sein sollte. Überprüfen Sie also gründlich, was dort mit den Implementierungen vorhanden ist (und zögern Sie nicht, Bugs zu melden, wenn Sie Inkonsistenzen entdecken).
- Drei Browser-Engines verwenden (modifiziertes) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Vor-Chromium-Versionen von Edge benutzten es intern, aber diese sind leider nicht öffentlich.

  - Für Gecko sind alle WebIDL-Dateien in einem einzigen Verzeichnis zusammengefasst: <https://searchfox.org/mozilla-central/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl` Dateien im Gecko-Quellbaum, aber sie sind nicht WebIDL, daher können Sie sie ignorieren. Ältere Versionen von Gecko haben einige ihrer WebIDL-Dateien etwas verstreut und verwenden möglicherweise sogar Mozillas IDL anstelle von WebIDL, um einige Webschnittstellen zu beschreiben, aber dies wird in keinem aktuellen Gecko-Code ein Problem darstellen.
  - Für Chromium befinden sie sich an zwei Standorten, beide Unterverzeichnisse des Quellcodes im [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/) Verzeichnis: [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Der Chromium-Quellcode hat IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie über den Quellcode verstreut, sodass Sie etwas mehr suchen müssen: Z.B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Es wurde jedoch so konzipiert, dass es erweitert werden kann, um mehr Informationen zu übermitteln, und Browseranbieter haben dies auch getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDL erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple ebenfalls eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt bereitgestellt.

> [!NOTE]
> Wir beschreiben hier nur den Teilbereich von WebIDL, der beim Schreiben der Dokumentation am nützlichsten ist. Es gibt viele weitere Anmerkungen, die für Implementierer nützlich sind; um einen vollständigen Überblick zu erhalten, konsultieren Sie die vier oben verlinkten Dokumente.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die die allgemeinen API-Funktionen beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist die Zeichenkette, die nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, die jeden Konstruktor, jede Eigenschaft und jede Methode auflistet, die für sie definiert sind.

### Vererbungskette

Das übergeordnete Element, falls vorhanden, einer gegebenen Schnittstelle wird nach dem Schnittstellennamen definiert, gefolgt von einem Doppelpunkt (`':'`). Es kann nur ein übergeordnetes Element pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgelistet (unter Verwendung des \\{{APIRef}} Makros). Sie kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden stehen mehreren Schnittstellen zur Verfügung. Um eine Neudefinition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen definiert, die _Mixins_ genannt werden.

Ab September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwendet man `interface mixin`, um eine Mixin-Schnittstelle zu definieren, wie folgt:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Man verwendet dann das `includes` Schlüsselwort, um zu sagen, dass die innerhalb eines Mixins definierten Eigenschaften auf einer Schnittstelle verfügbar sind:

```webidl
MyInterface includes MyMixin;
```

Mixins haben keine Vererbung und können keine anderen Mixins einbeziehen. Sie unterstützen jedoch Partials, sodass Sie Dinge wie diese sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke verbirgt MDN Mixins. Sie sind abstrakt und spezifikationsbezogene Konstrukte.
Man kann sie nicht in der Browserkonsole sehen, und es ist nützlicher zu wissen, auf welchen realen Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie ein Mixin in der IDL wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils) finden,
suchen Sie nach den Schnittstellen, die das Mixin implementieren, z.B.
[HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass anstelle der Dokumentation von `HTMLHyperlinkElementUtils`
Dokumentationen zu den konkreten Schnittstellen hinzugefügt werden, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)
und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Lesen Sie die folgenden zwei Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten, konsultieren Sie die [Datelines für Mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die Sie immer noch an einigen Stellen antreffen könnten, werden Mixins mit der `[NoInterfaceObject]` Anmerkung versehen:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf einer Schnittstelle implementiert sind, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in Fenstern und Arbeitern

Verfügbarkeit in Web-Workern (jeglicher Art) und auf dem Window-Scope wird durch eine Anmerkung `[Exposed=(Window,Worker)]` definiert. Die Anmerkung gilt für das partielle Interface, mit dem sie aufgeführt ist.

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

In diesem Fall ist `Performance.now()` auf dem `Window`-Scope und für jeden Worker verfügbar, wohingegen `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Web-Worker verfügbar sind.

Die häufigsten Werte für die `[Exposed]` sind:

- `Window`
  - : Das partielle Interface ist im globalen Scope von [`Window`](/de/docs/Web/API/Window) verfügbar.
- `Worker`
  - : Das partielle Interface ist in jeder Art von Worker verfügbar, das heißt, wenn der globale Scope ein Nachkomme von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Es ist auch für `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar sind und nur intern in Firefox sind).
- `DedicatedWorker`
  - : Das partielle Interface ist nur im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Das partielle Interface ist nur im [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Das partielle Interface ist nur im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein weiterer möglicher Wert ist `System`, aber dieser hat eine [besondere Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]` Anmerkung haben. Es bedeutet, dass, wenn ein Objekt dieses Typs als globaler Scope verwendet wird, jede Schnittstelle, Eigenschaft oder Methode, mit `xyz` als Wert von `[Exposed]`, verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier wird definiert, dass, wenn der globale Scope vom Typ `DedicatedWorkerGlobalScope` ist, das heißt, wenn wir uns in einem dedizierten Worker befinden, jede Schnittstelle, Eigenschaft oder Methode, die für `Worker` oder `DedicatedWorker` über die `[Exposed]` Anmerkung exponiert ist, verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit eines partiellen Interface, einschließlich seines Konstruktors, seiner Eigenschaften und Methoden durch eine Präferenz (normalerweise als "pref" bezeichnet) gesteuert werden. Dies wird auch in der WebIDL markiert.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier kontrolliert `media.webspeech.synth.enabled` das `SpeechSynthesis` Interface und seine Eigenschaften (die vollständige Auflistung hat mehr als 3).

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt in der WebIDL verfügbar (sie kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein).

### Nur im Systemcode verfügbar

Einige Schnittstellenfunktionen sind möglicherweise nur im internen Systemcode des Browsers oder im Chrome-Code verfügbar. Um dies anzuzeigen, verwenden wir in Gecko \[ChromeOnly], zum Beispiel ist die Eigenschaft `propName` im folgenden Beispiel nur über Chrome-Code aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Sie können die Definition einer Eigenschaft am Vorhandensein des `attribute` Schlüsselworts erkennen.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumenten werden wir darauf als `HTMLMediaElement.error` verweisen, da es zur `HTMLMediaElement` Schnittstelle gehört. Eine Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix unter Verwendung von \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext klar und unmissverständlich ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt des Typs `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass es den Wert `null` annehmen kann, und die Dokumentation muss _wann_ dies auftreten kann erklären. Wenn kein Fragezeichen vorhanden ist, kann die `error` Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ versehen werden, einer Zeichenfolge in eckigen Klammern (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute zeigen spezielle Verhaltensweisen an, die im Verlauf beschrieben werden müssen. Hier ist eine Liste von Standard-Erweiterungsattributen von Typen und der Ergänzung, die gemacht werden muss:

- `[LegacyNullToEmptyString]`

  - : Der `null` Wert wird in nicht standardisierter Weise in eine Zeichenfolge umgewandelt. Der Standardweg ist ihn in die Zeichenfolge `"null"` zu verwandeln, aber in diesem Fall wird er in `""` umgewandelt.

    Fügen Sie folgenden Satz am Ende des _Wert_ Abschnitts des Artikels hinzu:

    _When set to the `null` value, that `null` value is converted to the empty string (`""`), so `elt.innerHTML = null` is equivalent to `elt.innerHTML = ""`._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibberechtigungen für die Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht verändert werden. Es muss als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}} Makro neben seinem Definitionstext hinzugefügt wird.
- Im ersten Satz seiner eigenen Seite, indem die Beschreibung beginnt mit: _The read-only **`HTMLMediaElement.error`** property…_
- Indem man die Beschreibung in der Schnittstellenseite beginnt mit _Returns…_

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als 'rückgebend' eines Werts beschrieben werden. Nicht-schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert festzulegen.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie wenn einige Werte illegal sind, kann das Festlegen eines neuen Wertes dazu führen, dass eine Ausnahme ausgelöst wird. Dies wird mit der `[SetterThrows]` Anmerkung markiert. Wenn dies geschieht, _muss_ der Syntaxabschnitt auf der Eigenschaften-Seite einen Abschnitt Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als Textinformationen in der Spezifikation dieser API aufgelistet.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen illegalen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (zu einer JavaScript {{jsxref('String')}}) als Parameter festzulegen, führt zu einer {{jsxref('TypeError')}} Ausnahme. Dies muss dokumentiert werden, ist jedoch nur implizit in der WebIDL-Dokumentation markiert.

Es ist ungewöhnlich, dass Getter Ausnahmen auslösen, obwohl es in einigen Fällen geschieht. In diesem Fall wird die `[GetterThrows]` Anmerkung verwendet. Auch hier _muss_ der Syntaxabschnitt der Eigenschaften-Seite einen Abschnitt über Ausnahmen haben.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen auslösen

Wenn die Semantik von WebIDL nicht befolgt wird, wird oft selbst ohne `[SetterThrows]` oder `[GetterThrows]` eine Ausnahme ausgelöst. Zum Beispiel, wenn wir versuchen, in einem Read-Only Modus eine schreibgeschützte Eigenschaft auf einen neuen Wert zu setzen, das heißt, ihren impliziten Setter aufzurufen, wird eine schreibgeschützte Eigenschaft im Strict Mode eine Ausnahme auslösen.

Meist aus Kompatibilitätsgründen ist dieses Verhalten manchmal ärgerlich. Um dem vorzubeugen, indem man einen No-Op Setter erstellt (das heißt, indem man stillschweigend versucht, die Eigenschaft auf einen neuen Wert zu setzen), kann die `[LenientSetter]` Anmerkung verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird dem Beschreibungstext der Eigenschaft ein zusätzlicher Satz hinzugefügt. Z.B.

_Although this property is read-only, it will not throw if it is modified (even in strict mode); the setter is a no-operation and it will be ignored._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz auf ein internes Objekt sein.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (ein IDL `DOMString` oder anderes), {{jsxref("Number")}} (ein IDL `byte`, `octet`, `unsigned int` oder anderes) und {{jsxref("Boolean")}} werden immer kopiert und über sie muss nichts Besonderes notiert werden (es ist ein natürliches Verhalten, das von einem JavaScript-Entwickler erwartet wird).

Für Schnittstellenobjekte ist der Standard, eine _Referenz_ auf das interne Objekt zurückzugeben. Dies muss sowohl in der kurzen Beschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, gilt für die Referenz (das interne Objekt kann nicht verändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, auch wenn sie als schreibgeschützt in der entsprechenden Schnittstelle markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dieser Fall wird in der WebIDL mit der `[NewObject]` Anmerkung angezeigt.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: dessen Änderung ändert nicht den internen Wert und eine Änderung des internen Werts wirkt sich nicht auf jede Objektinstanz aus. In der Dokumentation werden wir es markieren, indem wir das Adjektiv _neu_ neben Objekt verwenden:

_The **`HTMLMediaElement.buffered`** read-only property returns a new \\{{domxref("TimeRanges")}} object that…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Returns a new \\{{domxref("TimeRanges")}} object that …_

Im Fall einer Referenz auf ein Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir explizit klar, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sind. Um dies zu kennzeichnen, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollections`, oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch in der Unterseite.

Z.B.

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine Live-\\{{domxref("HTMLFormControlsCollection")}} zurück, die…

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Eigenschaften in Workern ist ebenfalls in der WebIDL zu finden. Für eine Eigenschaft ist die Standardverfügbarkeit dieselbe wie die der `interface` (das heißt nur im [`Window`](/de/docs/Web/API/Window) Kontext verfügbar, wenn nichts Spezielles markiert ist) oder wie die der `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist, direkt vor dem "Syntax"-Abschnitt.

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies wird ebenfalls in der WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier kontrolliert `media.webvtt.enabled` die `textTracks` Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt in der WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein).

## Methoden

Sie können die Definition einer Methode am Vorhandensein von Klammern nach dem Namen erkennen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir werden darauf als `HTMLMediaElement.canPlayType()` (mit den Klammern, die anzeigen, dass es sich um eine Methode handelt) in den Dokumenten verweisen, da es zur Schnittstelle `HTMLMediaElement` gehört. Eine Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Präfix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext klar und unmissverständlich ist. Die Klammern sollten immer einbezogen werden.

### Parameter

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode sind im Syntax-Abschnitt der Methodenunterseite aufgelistet. Sie sind in der WebIDL der Reihe nach, zwischen den Klammern, als kommaseparierte Liste aufgelistet. Jeder Parameter hat einen Namen (oben angegeben) und einen Typ (z.B. bedeutet ein `'?'`, dass der `null` Wert gültig ist). Wenn markiert `optional`, ist der Parameter optional in einen Methodenaufruf einzubeziehen und muss das \\{{optional_inline}}-Flag enthalten, wenn er im Syntax-Abschnitt aufgelistet ist. Der Standardwert des Parameters ist nach dem Gleichheitszeichen (`'='`) angegeben.

Parametertypen können spezielle Verhaltensweisen haben, die mit erweiterten Attributen beschrieben werden (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und die Ergänzung, die Sie im Text vornehmen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie den folgenden Satz am Ende der Parameterbeschreibung hinzu: _A [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) value is treated the same as the empty string (`""`)._

### Typ des Rückgabewerts

```webidl
DOMString canPlayType(DOMString type);
```

Der Rückgabewerttyp wird vor dem Methodennamen angegeben — im obigen Fall ist der Wert ein Objekt des Typs `DOMString`. Wenn der Rückgabewert von einem Fragezeichen (`'?'`) gefolgt ist, kann auch ein Wert von `null` zurückgegeben werden, und die Dokumentation muss erklären, _wann_ dies passieren kann. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das `void` Schlüsselwort ist, bedeutet dies, dass es keinen Rückgabewert gibt. Es ist kein Rückgabewerttyp. Wenn der WebIDL-Eintrag `void` liest, sollte der _Rückgabewert_-Abschnitt in den Dokumenten einfach "None (\{{jsxref("undefined")}})." sagen.

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird mit der `[Throws]` Anmerkung markiert. Wenn dies geschieht, _muss_ der Syntaxabschnitt der Methoden-Seite einen Abschnitt über Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als Textinformationen in der Spezifikation von API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen illegalen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (gemappt auf ein JavaScript {{jsxref('String')}}) als Parameter festzulegen, führt zu einer {{jsxref('TypeError') }} Ausnahme. Dies muss dokumentiert werden, aber es ist nur implizit in der WebIDL-Dokumentation markiert.

Sehen Sie sich einen der diesen [_Ausnahme_-Sektionen](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Methoden in Workern ist ebenfalls in der WebIDL zu finden. Für eine Methode ist die Standardverfügbarkeit dieselbe wie die der `interface` (das heißt nur im [`Window`](/de/docs/Web/API/Window) Kontext verfügbar, wenn nichts Spezielles markiert ist) oder wie die der `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist, direkt vor dem Syntaxabschnitt.

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies wird ebenfalls in der WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier kontrolliert `media.webvtt.enabled` die `addTextTrack()` Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt in der WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein).

## Besondere Methoden

Einige Methoden sind nicht als reguläre Methoden in der WebIDL aufgelistet, sondern stattdessen als spezielle Schlüsselwörter, die in spezifische Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifier gibt an, wie ein Objekt, das auf einer Schnittstelle basiert, in Kontexten aufgelöst wird, die eine Zeichenfolge erwarten. (Siehe den Abschnitt [Stringifiers](#stringifiers).) Zusätzlich wird das Schlüsselwort auf `toString()` abgebildet und wie folgt definiert:

```webidl
stringifier;
```

Die `toString()` Methode wird genauso wie jede andere Methode der Schnittstelle aufgelistet und hat eine eigene Unterseite (z.B. [`Range.toString()`](/de/docs/Web/API/Range/toString)).

Ein Jsonifier wird auf `toJSON()` abgebildet und wie folgt definiert:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()` Methode wird genauso wie jede andere Methode der Schnittstelle aufgelistet und hat eine eigene Unterseite (z.B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON)).

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur der nicht standardisierte, vermutlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterable_ definiert werden, was bedeutet, dass sie folgende Methoden haben wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützt ebenfalls die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es sind zwei Arten der Iteration möglich: der _Wert-Iterator_ und der _Paar-Iterator_.

#### Wert-Iterator

```webidl
iterable<valueType>
```

Der Iterator iteriert über Werte des Typs _valueType_. Die generierten Methoden werden sein:

- `entries()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes (die `unsigned long` sind) zurückgibt.
- `values()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt.
- `keys()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel, die ihre Indizes (die `unsigned long` sind) sind, zurückgibt. Im Fall von Wert-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, welche eine gegebene Rückruffunktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`. Wir fügen einen Satz dazu in die Schnittstellenbeschreibung ein.

Die Werte, die über iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, wobei die `iterable<valueType>` Notation verwendet wird. Beispielsweise siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit in der WebIDL-Datei, falls die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angezeigt, wenn die Schnittstelle `getter` Methoden mit einem Parameter vom Typ `unsigned long` enthält.
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text ist typischerweise in der Spezifikation zu finden und beginnt gewöhnlich mit: _"The [values to iterate over](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte des Typs _valueType_ mit Schlüsseln des Typs _keyType_ iterieren, das heißt die Wertpaare. Die generierten Methoden werden sein:

- `entries()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Wertpaare zurückgibt. Beispielsweise siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Beispielsweise siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Beispielsweise siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, welche eine gegebene Rückruffunktion einmal für jeden Eintrag in der Liste ausführt. Beispielsweise siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`. Wir fügen einen Satz dazu in die Schnittstellenbeschreibung ein. Z.B. [`FormData`](/de/docs/Web/API/FormData).

Die Wertpaare, die über iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, wobei die `iterable<keyType, valueType>` Notation verwendet wird. Beispielsweise siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text ist typischerweise in der Spezifikation zu finden und beginnt gewöhnlich mit: _"The [value pairs to iterate over](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Set-ähnliche Methoden

Eine Schnittstelle kann als _set-like_ definiert werden, was bedeutet, dass sie eine _geordneten Menge von Werten_ darstellt, die folgende Methoden haben wird: `entries()`, `keys()`, `values()`, `forEach()` und `has()` (sie hat auch die `size` Eigenschaft). Sie unterstützt ebenfalls die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Der Set-ähnliche kann nicht "readonly" oder nicht sein. Wenn nicht schreibgeschützt, sind die Methoden zur Modifikation der Menge ebenfalls implementiert: `add()`, `clear()` und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes zurückgibt. Beispielsweise siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Beispielsweise siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, welche einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Beispielsweise siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, welche eine gegebene Rückruffunktion einmal für jeden Eintrag in der Liste ausführt. Beispielsweise siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die set-like Erklärung nicht durch schreibgeschützt vorhergeht, werden die folgenden Methoden ebenfalls generiert:

- `add()` fügt einen Eintrag hinzu. Zum Beispiel die `.add()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()` leert die set-like Struktur. Zum Beispiel die `.clear()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()` entfernt einen Eintrag. Zum Beispiel die `.delete()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche Set-Schnittstelle kann auch die Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())` verwenden.

## Spezielle Verhaltensweisen

Einige IDL-Mitglieder zeigen spezielle Verhaltensweisen an, die auf geeigneten Seiten vermerkt werden sollten.

### Stringifiers

Zusätzlich zur Bereitstellung der `toString()` Methode für eine Schnittstelle, wie in [toString() und toJSON()](#tostring_and_tojson) beschrieben, geben Stringifiers auch an, dass eine Objektinstanz, wenn sie als Zeichenfolge verwendet wird, eine andere Zeichenfolge zurückgibt als die Standardzeichenfolge. (Der Standard ist typischerweise eine JSON-Darstellung des Objekts). Genau wie das geschieht, hängt davon ab, wie es in der IDL spezifiziert ist. Unabhängig davon, wie, sollte das nicht standardmäßige Verhalten auf der Schnittstellenseite beschrieben werden.

Wenn das `stringifier` Schlüsselwort eine Attributname begleitet, hat die Referenzierung des Objektnamens dasselbe Ergebnis wie die Referenzierung des Attributnamens. Betrachten Sie die folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse, die auf dieser Schnittstelle basiert, sind die folgenden Codezeilen gleichwertig. Das Verhalten sollte auf der Eigenschaftenseite zusätzlich zur Schnittstellenseite vermerkt werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das `stringifier` Schlüsselwort alleine verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten wird im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu lernen, was eine Schnittstellenreferenz tatsächlich tut, lesen Sie die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind in der WebIDL ein wenig versteckt: Sie sind als Anmerkungen der Hauptschnittstelle aufgelistet.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer gegebenen Schnittstelle A kann wie `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit derselben Schnittstelle wird durch das `Constructor` Attribut an der Schnittstelle definiert. Es können Klammern und eine Liste von Parameter oder nicht vorhanden sein (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird das obige mit dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` versehen.

Ein weiteres Beispiel für einen unbenannten Konstruktor, mit Parametern:

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen als seine Schnittstelle hat. Zum Beispiel `new Image(…)` erstellt ein neues `HTMLImageElement`-Objekt. Sie sind in der WebIDL unter Verwendung des `NamedConstructor` Attributs an der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und dem Parameter innerhalb der Klammern im gleichen Format, wie Sie es bei Methoden sehen werden.

Es kann mehrere benannte Konstruktoren für eine spezifische Schnittstelle geben, aber dies ist extrem selten; in einem solchen Fall fügen wir eine Unterseite pro Name hinzu.

### Neue Konstruktor-Syntax

Ab September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax beinhaltet keine erweiterte Attribut auf der Schnittstelle mehr:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax namens `constructor` ohne explizit definierten Rückgabetyp, der wie folgt geschrieben wird:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dies bedeutet, dass erweiterte Attribute jetzt auf den Konstruktor spezifiziert werden können, und es wird nicht mehr angenommen, dass alle Konstruktoren werfen. Wenn ein Konstruktor wirft, wird `[Throws]` verwendet, um dies anzuzeigen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, also werden Sie wahrscheinlich beide draußen in der Wildnis antreffen. Daher werden wir weiterhin beide Arten von Syntax hier abdecken.

### Verfügbarkeit in Workern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle oder partielle Schnittstelle, auf der sie definiert sind. Die Unterseite liefert diese Informationen auf die gleiche Weise wie bei einer Methode.

### Präferenzen

Konstruktoren werden durch dieselbe Präferenz wie die Schnittstelle oder partielle Schnittstelle, auf der sie definiert sind, gesteuert. Die Unterseite liefert diese Informationen auf die gleiche Weise wie bei einer Methode.
