---
title: Information enthalten in einer WebIDL-Datei
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Beim Schreiben von Dokumentation über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte, sowie das Modell, und die Implementierungen beschreiben, was tatsächlich in den Browsern umgesetzt wurde. WebIDL-Dateien sind eine sehr komprimierte Art, eine Menge, aber nicht alle, Informationen über die API zu liefern. Dieses Dokument bietet eine Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist dazu gedacht, APIs zu beschreiben. In der weiteren Welt der Informatik gibt es verschiedene Arten von IDL. In der Welt der Browser wird die IDL, die wir verwenden, _WebIDL_ genannt. Es gibt zwei Arten von WebIDL: die in der WebIDL-Spezifikation angegeben wird und die in Browsern implementierte. Die Spezifikation ist die kanonische Referenz, und die Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist und enthält zusätzliche Dinge wie Anmerkungen, Informationen über nicht-standardisierte Elemente und browserspezifische Erweiterungen der IDL-Spezifikation.

## Wo findet man WebIDL-Dateien

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr praktische Art, eine präzise Definition zu vermitteln. Diese beschreiben die Syntax der API. Obwohl die kanonische Referenz, müssen wir bedenken, dass sie von der tatsächlichen Implementierung abweichen können. Auf MDN wollen wir praktisch sein und dokumentieren, was die Web-Plattform wirklich ist, nicht was sie idealerweise sein sollte. Überprüfen Sie daher doppelt, was mit den Implementierungen vorhanden ist (und zögern Sie nicht, Fehler zu melden, wenn Sie Ungereimtheiten entdecken).
- Drei Browser-Engines verwenden (modifizierte) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Vor-Chromium-Versionen von Edge verwendeten es intern, aber diese sind leider nicht öffentlich.
  - Für Gecko sind alle WebIDL-Dateien in einem einzigen Verzeichnis gruppiert: <https://searchfox.org/firefox-main/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellbaum, aber sie sind nicht WebIDL, also können Sie sie ignorieren. Ältere Versionen von Gecko haben einige ihrer WebIDL verstreut und verwenden möglicherweise sogar Mozillas IDL anstelle von WebIDL, um einige Web-Oberflächen zu beschreiben, aber dies wird in keinem aktuellen Gecko-Code ein Problem darstellen.
  - Für Chromium befinden sie sich an zwei Stellen, beide im Teilbaum des Quellcodesverzeichnisses [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/): [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Der Chromium-Quellcode hat IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quellcode verstreut, sodass Sie etwas mehr recherchieren müssen: Z.B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in seiner [Spezifikation](https://webidl.spec.whatwg.org/) definiert. Aber es wurde so entworfen, dass es erweitert werden kann, um mehr Informationen zu vermitteln, und Browseranbieter haben dies getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDL erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple ebenfalls eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt zur Verfügung gestellt.

> [!NOTE]
> Wir beschreiben hier nur den Teil von WebIDL, der beim Schreiben von Dokumentation am nützlichsten ist. Es gibt viele weitere Anmerkungen, die für Implementierer nützlich sind. Um einen vollständigen Überblick zu erhalten, beziehen Sie sich auf die vier oben verlinkten Dokumente.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die die allgemeinen API-Funktionen beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist der String, der nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder einem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, die jeden Konstruktor, jede Eigenschaft und jede Methode auflistet, die für sie definiert sind.

### Vererbungskette

Das übergeordnete Element, falls vorhanden, einer gegebenen Schnittstelle wird nach dem Schnittstellennamen definiert und folgt einem Doppelpunkt (`':'`). Es kann nur ein übergeordnetes Element pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgelistet (mit dem \\{{APIRef}}-Makro). Sie kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden sind in mehreren Schnittstellen verfügbar. Um eine Neudefinition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen definiert, die _Mixins_ genannt werden.

Seit September 2019 wurde die Mixins-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin`, um eine Mixin-Schnittstelle zu definieren, so:

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

Mixins haben keine Vererbung und können keine anderen Mixins einschließen. Sie unterstützen jedoch Partials, sodass Sie Dinge wie das Folgende sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke versteckt MDN Mixins. Sie sind abstrakte und spezifikationsspezifische Konstrukte. Sie können sie nicht in der Browserkonsole sehen und es ist nützlicher zu wissen, auf welchen realen Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie auf ein Mixin in IDL stoßen, wie z. B. [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils), suchen Sie nach den Schnittstellen, die das Mixin implementieren, z. B. [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass anstelle der Dokumentation von `HTMLHyperlinkElementUtils` die Dokumentationen zu den konkreten Schnittstellen hinzugefügt werden, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Sehen Sie die folgenden zwei Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenrichtlinie für Mixins in BCD](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die Sie möglicherweise noch an einigen Stellen antreffen, werden Mixins mit der Anmerkung `[NoInterfaceObject]` prefixiert:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf einer Schnittstelle implementiert sind, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit im Fenster und in Arbeitern

Die Verfügbarkeit in Web-Arbeitern (jeglicher Art) und im Window-Bereich wird mit einer Anmerkung definiert: `[Exposed=(Window,Worker)]`. Die Anmerkung gilt für die Teil-Schnittstelle, mit der sie aufgelistet ist.

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

In diesem Fall ist `Performance.now()` im `Window`-Bereich und für jeden Arbeiter verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Web-Arbeiter verfügbar sind.

Die häufigsten Werte für `[Exposed]` sind:

- `Window`
  - : Die Teil-Schnittstelle ist im globalen Bereich [`Window`](/de/docs/Web/API/Window) verfügbar.
- `Worker`
  - : Die Teil-Schnittstelle ist für jede Art von Arbeiter verfügbar, d.h. wenn der globale Bereich ein Nachkomme von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (es ist auch verfügbar für `ChromeWorker`, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar sind und intern in Firefox verwendet werden).
- `DedicatedWorker`
  - : Die Teil-Schnittstelle ist nur für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die Teil-Schnittstelle ist nur für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die Teil-Schnittstelle ist nur für den [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein weiterer Wert ist möglich, wie etwa `System`, aber dies hat eine [besondere Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]` Anmerkung haben. Dies bedeutet, dass wenn ein Objekt dieses Typs als globaler Bereich verwendet wird, jede Schnittstelle, Eigenschaft oder Methode, mit `xyz` als Wert von `[Exposed]`, verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier ist definiert, dass wenn der globale Bereich vom Typ `DedicatedWorkerGlobalScope` ist, das heißt, wenn wir uns in einem dedizierten Arbeiter befinden, jede Schnittstelle, Eigenschaft oder Methode freigelegt – mit der `[Exposed]` Anmerkung – für `Worker` oder `DedicatedWorker` verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer Teil-Schnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden, durch eine Präferenz gesteuert werden (meistens als "pref" bezeichnet). Dies wird ebenfalls im WebIDL markiert.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier kontrolliert `media.webspeech.synth.enabled` die Schnittstelle `SpeechSynthesis` und ihre Eigenschaften (die vollständige Auflistung enthält mehr als 3).

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann bei einem Produkt, das Gecko verwendet, anders sein als bei einem anderen).

### Nur im Systemcode verfügbar

Einige Schnittstellenfunktionen sind möglicherweise nur im internen Systemcode des Browsers oder im Chrome-Code verfügbar. Um dies zu signalisieren, wird in Gecko \[ChromeOnly] verwendet, zum Beispiel ist die Eigenschaft propName im folgenden Beispiel nur per Chrome-Code ansprechbar:

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

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumenten werden wir darauf als `HTMLMediaElement.error` verweisen, da es zur `HTMLMediaElement` Schnittstelle gehört. Das Verlinken zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix mit \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) weist darauf hin, dass es den Wert `null` annehmen kann, und in der Dokumentation muss erklärt werden, _wann_ dies der Fall ist. Ist kein Fragezeichen vorhanden, kann die `error` Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ prefixiert sein, eine Zeichenkette in eckigen Klammern (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute zeigen spezielles Verhalten an, das im Text beschrieben werden muss. Hier ist eine Liste der standardmäßigen erweiterten Attribute der Typen und die Ergänzung, die gemacht werden muss:

- `[LegacyNullToEmptyString]`
  - : Der `null`-Wert wird in nicht standardisierter Weise in eine Zeichenkette konvertiert. Der Standardweg ist die Konvertierung in den `"null"` Zeichenfolge, aber in diesem Fall wird es in `""` konvertiert.

    Fügen Sie den folgenden Satz am Ende des _Wert_ Abschnitts des Artikels hinzu:

    _Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in die leere Zeichenkette (`""`) konvertiert, also `elt.innerHTML = null` ist gleichbedeutend mit `elt.innerHTML = ""`._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibrechte für die Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Ist das Schlüsselwort `readonly` vorhanden, kann die Eigenschaft nicht modifiziert werden. Sie muss als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}} Makro neben dem Definitionsterm hinzugefügt wird.
- Im ersten Satz auf ihrer eigenen Seite, indem die Beschreibung beginnt mit: _Die schreibgeschützte **`HTMLMediaElement.error`** Eigenschaft…_
- Indem die Beschreibung auf der Schnittstellenseite beginnt mit _Gibt zurück…_

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als „rückgebend“ eines Werts beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert zu setzen.

### Ausnahmen werfen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie wenn einige Werte unzulässig sind, kann das Setzen eines neuen Wertes zu einer Ausnahme führen. Dies wird mit der `[SetterThrows]` Anmerkung markiert. Wenn dies passiert, _muss_ der Syntax-Abschnitt der Eigenschaftsseite einen Abschnitt für Ausnahmen enthalten. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind in der Spezifikation dieser API als Textinfo aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen unzulässigen enumerierten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (zugeordnet zu einem JavaScript {{jsxref('String')}}) zu setzen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, wird jedoch nur implizit im WebIDL-Dokument markiert.

Es ist ungewöhnlich, dass Getter-Ausnahmen werfen, obwohl es in einigen wenigen Fällen vorkommt. In diesem Fall wird die `[GetterThrows]` Anmerkung verwendet. Auch hier _muss_ der Syntax-Abschnitt der Eigenschaftsseite einen Abschnitt für Ausnahmen enthalten.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen werfen

Wenn die Semantik von WebIDL nicht eingehalten wird, wird oft auch ohne gesetztes `[SetterThrows]` oder `[GetterThrows]` eine Ausnahme geworfen. Zum Beispiel, wenn wir im "strict mode" versuchen, einer schreibgeschützten Eigenschaft einen neuen Wert zuzuweisen, das heißt ihren impliziten Setter aufzurufen, wird eine schreibgeschützte Eigenschaft im "strict mode" eine Ausnahme werfen.

Hauptsächlich aus Kompatibilitätsgründen ist dieses Verhalten manchmal störend. Um dies zu verhindern, indem ein No-Op-Setter erstellt wird (das heißt, jeder Versuch, die Eigenschaft auf einen neuen Wert zu setzen, wird stillschweigend ignoriert), kann die `[LenientSetter]` Anmerkung verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird dem Beschreibungstext der Eigenschaft ein zusätzlicher Satz hinzugefügt, z.B.

_Obwohl diese Eigenschaft schreibgeschützt ist, wird keine Ausnahme geworfen, wenn sie modifiziert wird (auch im "strict mode"); der Setter ist eine No-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts sein, ein neu erstelltes synthetisches Objekt oder eine Referenz zu einem internen Objekt.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (das ein IDL `DOMString` ist, oder andere), {{jsxref("Number")}} (das ein IDL `byte`, `octet`, `unsigned int`, oder andere ist) und {{jsxref("Boolean")}} werden immer kopiert und es muss nichts Besonderes darüber vermerkt werden (es ist natürliches Verhalten, das von einem JavaScript-Entwickler erwartet wird).

Für Schnittstellenobjekte ist es standardmäßig so, dass eine _Referenz_ auf das interne Objekt zurückgegeben wird. Dies muss sowohl in der kurzen Beschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, bezieht sich auf die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, selbst wenn sie in der betreffenden Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dieser Fall wird im WebIDL mit der `[NewObject]` Anmerkung angezeigt.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: Eine Änderung daran wird nicht den internen Wert ändern und eine Änderung am internen Wert wird keine Auswirkungen auf jede Objektinstanz haben. In der Dokumentation werden wir dies markieren, indem wir das Adjektiv _neu_ neben das Objekt setzen:

_Die schreibgeschützte **`HTMLMediaElement.buffered`** Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}} Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}} Objekt zurück, das …_

Im Falle einer Referenz zu einem Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir es explizit, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sein werden. Um dies zu markieren, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollections` oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch auf der Unterseite.

Z.B.

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine Live \\{{domxref("HTMLFormControlsCollection")}} zurück, die …

### Verfügbarkeit in Arbeitern

Die Verfügbarkeit einzelner Eigenschaften in Arbeitern findet sich ebenfalls im WebIDL. Für eine Eigenschaft ist die Standardeinstellung die gleiche Verfügbarkeit wie die `interface` (d.h. nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar, wenn nichts Besonderes markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Arbeitern verfügbar ist oder nicht, direkt vor dem "Syntax"-Abschnitt.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies wird ebenfalls im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die `textTracks` Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann bei einem Produkt, das Gecko verwendet, anders sein als bei einem anderen).

## Methoden

Sie können die Definition einer Methode am Vorhandensein von Klammern nach dem Namen erkennen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir werden darauf als `HTMLMediaElement.canPlayType()` (mit den Klammern, die anzeigen, dass es sich um eine Methode handelt) in den Dokumenten verweisen, da es zur `HTMLMediaElement` Schnittstelle gehört. Das Verlinken zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix mit \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer enthalten sein.

### Parameter

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode sind im Syntax-Abschnitt der Methodenunterseite aufgelistet. Sie sind im WebIDL in Reihenfolge aufgelistet, zwischen den Klammern, als durch Komma getrennte Liste. Jeder Parameter hat einen Namen (wie oben angegeben) und einen Typ (z.B. ein `'?'` bedeutet, dass der `null` Wert gültig ist). Wenn `optional` markiert, ist der Parameter optional in einem Methodenaufruf enthalten und muss das \\{{optional_inline}} Flag enthalten, wenn er im Syntax-Abschnitt aufgelistet ist. Der Standardwert des Parameters ist nach dem Gleichheitszeichen (`'='`) aufgelistet.

Parametertypen können besondere Verhaltensweisen haben, die mit erweiterten Attributen beschrieben werden (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und die Ergänzungen, die Sie im Text einfügen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie den folgenden Satz am Ende der Parameterbeschreibung hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso wie die leere Zeichenkette (`""`) behandelt._

### Typ des Rückgabewertes

```webidl
DOMString canPlayType(DOMString type);
```

Der Rückgabewerttyp wird vor dem Methodennamen angegeben — im obigen Fall ist der Wert ein Objekt des Typs `DOMString`. Wird der Rückgabewerttyp von einem Fragezeichen (`'?'`) gefolgt, kann auch ein Wert von `null` zurückgegeben werden, und in der Dokumentation muss erklärt werden, _wann_ dies der Fall sein kann. Ist kein Fragezeichen vorhanden, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das Schlüsselwort `void` ist, bedeutet es, dass kein Rückgabewert vorhanden ist. Es ist kein Rückgabewerttyp. Wenn im WebIDL-Eintrag `void` steht, sollte der _Rückgabewert_ Abschnitt in den Dokumenten einfach "None (\{{jsxref("undefined")}})." angeben.

### Ausnahmen werfen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen werfen. Dies wird mithilfe der `[Throws]` Anmerkung markiert. Wenn dies passiert, _muss_ der Syntax-Abschnitt der Methodenseite einen Abschnitt für Ausnahmen enthalten. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind in der Spezifikation dieser API als Textinfo aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen unzulässigen enumerierten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (zugeordnet zu einem JavaScript {{jsxref('String')}}) als Parameter zu setzen, führt zu einer {{jsxref('TypeError')}} Ausnahme. Dies muss dokumentiert werden, wird jedoch nur implizit im WebIDL-Dokument markiert.

Werfen Sie einen Blick auf einen dieser [_Exceptions_ Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions).

### Verfügbarkeit in Arbeitern

Die Verfügbarkeit einzelner Methoden in Arbeitern findet sich ebenfalls im WebIDL. Für eine Methode ist die Standardeinstellung die gleiche Verfügbarkeit wie die `interface` (d.h. nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar, wenn nichts Besonderes markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Arbeitern verfügbar ist oder nicht, direkt vor dem Syntax-Abschnitt.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies wird ebenfalls im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die `addTextTrack()` Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann bei einem Produkt, das Gecko verwendet, anders sein als bei einem anderen).

## Besondere Methoden

Einige Methoden sind nicht als reguläre Methoden in WebIDL aufgeführt, sondern als spezielle Schlüsselwörter, die in spezifische Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifizierer gibt an, wie ein auf einer Schnittstelle basierendes Objekt in Kontexten, die einen Zeichenfolgenwert erwarten, aufgelöst wird. (Siehe den Abschnitt [Stringifizierer](#stringifizierer)). Zusätzlich wird das Schlüsselwort `toString()` wie folgt definiert:

```webidl
stringifier;
```

Die `toString()` Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Range.toString()`](/de/docs/Web/API/Range/toString))

Ein Jsonifizierer wird zu `toJSON()` gemappt und wird wie folgt definiert:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()` Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON))

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur das nicht standardisierte, wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterable_ definiert werden, was bedeutet, dass sie die folgenden Methoden haben wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei Arten von Iteratoren, die möglich sind: den _Value Iterator_ und den _Pair Iterator._

#### Value Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte des Typs _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, das einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Indexe (die `unsigned long` sind) zurückgibt.
- `values()`, das einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt.
- `keys()`, das einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel, die seine Indexe (die `unsigned long` sind), zurückgibt. Im Fall von Value Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator ermöglicht die Verwendung der Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`. Wir fügen in der Schnittstellenbeschreibung einen Satz darüber hinzu.

Die zu iterierenden Werte können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, mit der Notation `iterable<valueType>`. Zum Beispiel, siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit in der WebIDL-Datei, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angezeigt, wenn die Schnittstelle `getter`-Methoden mit einem Parameter vom Typ `unsigned long` umfasst.
- Außerhalb der WebIDL-Datei, im begleitenden Text. Solch ein Text ist typischerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"Die [zu iterierenden Werte](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Pair Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte des Typs _valueType_ mit Schlüsseln des Typs _keyType_ iterieren, das heißt, die Wertepaare. Die generierten Methoden werden sein:

- `entries()`, das einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Wertepaare zurückgibt. Zum Beispiel, siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, das einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel, siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, das einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel, siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator ermöglicht die Verwendung der Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`. Wir fügen in der Schnittstellenbeschreibung einen Satz darüber hinzu. Z.B. [`FormData`](/de/docs/Web/API/FormData).

Die Wertepaare zum Iterieren können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, mit der Notation `iterable<keyType, valueType>`. Zum Beispiel, siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb der WebIDL-Datei, im begleitenden Text. Solch ein Text ist typischerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"Die [zu iterierenden Wertepaare](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Mengen-ähnliche Methoden

Eine Schnittstelle kann als _set-like_ definiert werden, was bedeutet, dass sie eine _geordneten Menge von Werten_ darstellt und die folgenden Methoden hat: `entries()`, `keys()`, `values()`, `forEach()` und `has()` (sie hat auch die Eigenschaft `size`). Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Die Mengen-ähnliche Kann mit `readonly` oder ohne vorhergehen. Wenn nicht schreibgeschützt, sind die Methoden zur Änderung der Menge ebenfalls implementiert: `add()`, `clear()` und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, das einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Indexe zurückgibt. Zum Beispiel, siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, das einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel, siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, das einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel, siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die Erklärung des Mengen-ähnlichen nicht mit schreibgeschützt vorangestellt ist, werden die folgenden Methoden ebenfalls generiert:

- `add()` fügt einen Eintrag hinzu. Z.B. die `.add()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()` leert die Set-ähnliche Struktur. Z.B. die `.clear()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()` entfernt einen Eintrag. Z.B. die `.delete()` Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche Set-Schnittstelle ermöglicht auch die Verwendung der Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`.

## Spezielle Verhaltensweisen

Einige IDL-Mitglieder zeigen spezielle Verhaltensweisen an, die auf entsprechenden Seiten vermerkt werden sollten.

### Stringifizierer

Zusätzlich zur Hinzufügung der `toString()` Methode zu einer Schnittstelle, wie im Abschnitt [toString() und toJSON()](#tostring_and_tojson) beschrieben, geben Stringifizierer auch an, dass eine Objektinstanz, wenn sie als Zeichenfolge verwendet wird, eine andere Zeichenfolge als die Standardzeichenfolge zurückgibt. (Die Standardzeichenfolge ist normalerweise eine JSON-Darstellung des Objekts). Genau wie hängt davon ab, wie es in der IDL spezifiziert ist. Unabhängig vom Wie sollte das nicht-standardmäßige Verhalten auf der Schnittstellenseite beschrieben werden.

Wenn das Schlüsselwort `stringifier` zusammen mit einem Attributnamen verwendet wird, hat das Referenzieren des Objektnamens das gleiche Ergebnis wie das Referenzieren des Attributnamens. Betrachten Sie die folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse, die auf dieser Schnittstelle basiert, sind die folgenden Codezeilen untereinander äquivalent. Das Verhalten sollte zusätzlich zur Schnittstellenseite auf der Eigenschaftsseite vermerkt werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das `stringifier` Schlüsselwort allein verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten wird im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu sehen, was eine Schnittstellenreferenz tatsächlich tut, beachten Sie die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind im WebIDL ein wenig versteckt: Sie werden als Anmerkungen der Hauptschnittstelle aufgelistet.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer bestimmten Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit der gleichen Schnittstelle wird durch die `Constructor` Anmerkung an der Schnittstelle definiert. Es können Klammern und eine Liste von Parametern vorhanden sein oder nicht (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird das oben mit dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` versehen.

Ein weiteres Beispiel für einen unbenannten Konstruktor, mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es kann auch mehrere unbenannte Konstruktoren geben, die sich durch ihre Parameterlisten unterscheiden. Die ganze Syntax wird auf einer einzigen Unterseite dokumentiert.

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen hat als der seiner Schnittstelle. Zum Beispiel erstellt `new Image(…)` ein neues `HTMLImageElement` Objekt. Sie werden im WebIDL mit der `NamedConstructor` Anmerkung an der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und den Parametern innerhalb der Klammern, im gleichen Format, das Sie für Methoden sehen werden.

Es kann mehrere benannte Konstruktoren für eine bestimmte Schnittstelle geben, aber das ist äußerst selten; in einem solchen Fall enthalten wir eine Unterseite pro Namen.

### Neue Konstruktorsyntax

Seit September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax beinhaltet keine erweiterte Attribut für die Schnittstelle mehr:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax namens `constructor` ohne explizit definierten Rückgabetyp, wie folgt geschrieben:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dadurch können erweiterte Attribute jetzt am Konstruktor angegeben werden und es wird nicht mehr davon ausgegangen, dass alle Konstruktoren Ausnahmen werfen. Wenn ein Konstruktor Ausnahmen wirft, wird `[Throws]` verwendet, um darauf hinzuweisen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, sodass Sie wahrscheinlich beide in der freien Natur antreffen werden. Wir werden daher weiterhin beide Arten von Syntax hier abdecken.

### Verfügbarkeit in Arbeitern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle oder Teil-Schnittstelle, in der sie definiert sind. Die Unterseite enthält diese Information auf dieselbe Weise wie bei einer Methode.

### Präferenzen

Konstruktoren werden von derselben Präferenz gesteuert wie die Schnittstelle oder Teil-Schnittstelle, in der sie definiert sind. Die Unterseite stellt diese Information auf die gleiche Weise wie bei einer Methode bereit.
