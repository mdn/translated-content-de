---
title: In einem WebIDL-Dokument enthaltene Informationen
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Beim Verfassen von Dokumentationen über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte sowie das Modell, und die Implementierungen beschreiben, was tatsächlich in den Browsern umgesetzt wurde. WebIDL-Dateien sind eine sehr komprimierte Weise, um viele, aber nicht alle, Informationen über die API bereitzustellen. Dieses Dokument bietet eine Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist dazu ausgelegt, APIs zu beschreiben. In der breiteren Welt der Informatik gibt es mehrere Arten von IDL. In der Welt der Browser wird die IDL, die wir verwenden, _WebIDL_ genannt. Es sind zwei Arten von WebIDL verfügbar: die in der WebIDL-Spezifikation und die, die in Browsern implementiert ist. Die Spezifikation ist die kanonische Referenz, und die Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist und enthält zusätzliche Dinge wie Anmerkungen, Informationen über nicht standardmäßige Elemente und browser-spezifische Erweiterungen der IDL-Spezifikation.

## Wo man WebIDL-Dateien findet

WebIDL kann an verschiedenen Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr bequeme Art, eine präzise Definition zu vermitteln. Diese beschreiben die Syntax der API. Obwohl die kanonische Referenz, müssen wir im Hinterkopf behalten, dass sie von der tatsächlichen Implementierung abweichen können. Auf MDN wollen wir praktisch sein und dokumentieren, was die Webplattform wirklich ist, nicht, was sie idealerweise sein sollte. Überprüfen Sie also sorgfältig, was tatsächlich implementiert wurde (und zögern Sie nicht, Bugs zu melden, wenn Sie Unstimmigkeiten entdecken).
- Drei Browser-Engines verwenden (modifiziertes) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Vor-Chromium-Versionen von Edge haben es intern verwendet, aber diese sind leider nicht öffentlich.

  - Für Gecko sind alle WebIDL-Dateien in einem Verzeichnis gruppiert: <https://searchfox.org/mozilla-central/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellbaum, aber sie sind nicht WebIDL, also können Sie diese ignorieren. Ältere Versionen von Gecko haben einige ihrer WebIDL-Dateien verstreut und verwenden möglicherweise Mozillas IDL anstelle von WebIDL, um einige Webschnittstellen zu beschreiben, aber dies sollte kein Problem in einem aktuellen Gecko-Code sein.
  - Für Chromium befinden sie sich an zwei Orten, beide Unterbäume des Quellcodes [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/) Verzeichnisses: [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Der Chromium-Quellcode hat IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quellcode verstreut, sodass Sie ein wenig mehr graben müssen: Zum Beispiel <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Es wurde jedoch entworfen, um erweitert zu werden, um mehr Informationen zu übertragen, und Browser-Anbieter haben dies auch getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDLs erstellt.
- Für Chromium hat Google auch ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple auch eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt zur Verfügung gestellt.

> [!NOTE]
> Wir beschreiben hier nur den Teil von WebIDL, der beim Schreiben von Dokumentationen am nützlichsten ist. Es gibt viele weitere Anmerkungen, die für Implementierer nützlich sind; um einen vollständigen Überblick zu erhalten, lesen Sie die vier oben verlinkten Dokumente.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die die allgemeinen API-Funktionen beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist die Zeichenkette, die nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, auf der jeder Konstruktor, jede Eigenschaft und jede Methode aufgelistet ist, die dafür definiert sind.

### Vererbungskette

Das Elternteil, falls vorhanden, einer bestimmten Schnittstelle wird nach dem Schnittstellennamen definiert, gefolgt von einem Doppelpunkt (`':'`). Es kann nur ein Elternteil pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgeführt (unter Verwendung des \\{{APIRef}}-Makros). Sie kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden sind für mehrere Schnittstellen verfügbar. Um eine Neudefinition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen definiert, die _Mixins_ genannt werden.

Seit September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin`, um eine Mixin-Schnittstelle zu definieren, wie folgt:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Anschließend verwenden Sie das Schlüsselwort `includes`, um anzugeben, dass die in einem Mixin definierten Eigenschaften auf einer Schnittstelle verfügbar sind:

```webidl
MyInterface includes MyMixin;
```

Mixins haben keine Vererbung und können keine anderen Mixins einschließen. Sie unterstützen jedoch Teilschnittstellen, sodass Sie Dinge wie dies sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Zu Dokumentationszwecken verbirgt MDN Mixins. Sie sind abstrakte und nur in Spezifikationen vorhandene Konstrukte. Sie können sie nicht in der Browser-Konsole sehen, und es ist nützlicher zu wissen, auf welchen realen Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie auf ein Mixin in IDL stoßen, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils), suchen Sie nach den Schnittstellen, die das Mixin implementieren, zum Beispiel [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass statt `HTMLHyperlinkElementUtils` zu dokumentieren, die Dokumentation zu den konkreten Schnittstellen hinzugefügt wird, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Siehe die folgenden beiden Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenrichtlinie für Mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die Sie möglicherweise an einigen Stellen noch finden, werden Mixins mit der `[NoInterfaceObject]`-Annotation prefixiert:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf einer Schnittstelle implementiert sind, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in Window und Workern

Die Verfügbarkeit in Webworkern (jeglicher Art) und im Window-Scope wird mittels einer Anmerkung definiert: `[Exposed=(Window,Worker)]`. Die Anmerkung gilt für die Teilschnittstelle, mit der sie aufgelistet ist.

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

In diesem Fall ist `Performance.now()` sowohl im `Window`-Scope als auch für jeden Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Webworker verfügbar sind.

Die häufigsten Werte für `[Exposed]` sind:

- `Window`
  - : Die Teilschnittstelle steht dem globalen Scope [`Window`](/de/docs/Web/API/Window) zur Verfügung.
- `Worker`
  - : Die Teilschnittstelle steht jeder Art von Worker zur Verfügung, das heißt, wenn der globale Scope ein Nachkomme von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Es steht auch `ChromeWorker` zur Verfügung, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar sind und intern in Firefox verwendet werden.)
- `DedicatedWorker`
  - : Die Teilschnittstelle steht nur [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) zur Verfügung.
- `SharedWorker`
  - : Die Teilschnittstelle steht nur [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) zur Verfügung.
- `ServiceWorker`
  - : Die Teilschnittstelle steht nur [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) zur Verfügung.

Ein weiterer Wert ist möglich, wie `System`, aber dies hat eine [spezielle Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]`-Anmerkung haben. Das bedeutet, dass, wenn ein Objekt dieses Typs als globaler Scope verwendet wird, jede Schnittstelle, Eigenschaft oder Methode mit `xyz` als Wert von `[Exposed]` verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier ist definiert, dass, wenn der globale Scope vom Typ `DedicatedWorkerGlobalScope` ist, das heißt, wenn wir in einem dedizierten Worker sind, jede Schnittstelle, Eigenschaft oder Methode, die mittels der `[Exposed]`-Anmerkung dem `Worker` oder `DedicatedWorker` ausgesetzt ist, verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer Teilschnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden, durch eine Präferenz (gewöhnlich "Pref" genannt) gesteuert werden. Dies ist auch im WebIDL markiert.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier steuert `media.webspeech.synth.enabled` die `SpeechSynthesis`-Schnittstelle und ihre Eigenschaften (die vollständige Auflistung hat mehr als 3).

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann sich von einem Produkt, das Gecko verwendet, zu einem anderen unterscheiden).

### Nur in Systemcode verfügbar

Einige Schnittstellenfunktionen sind möglicherweise nur im internen Systemcode des Browsers oder im Chrome-Code verfügbar. Um dies auszudrücken, verwendet man bei Gecko \[ChromeOnly], zum Beispiel ist die Eigenschaft `propName` im folgenden Beispiel nur über Chrome-Code aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Sie erkennen die Definition einer Eigenschaft an dem Vorhandensein des `attribute`-Schlüsselworts.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumenten werden wir sie als `HTMLMediaElement.error` bezeichnen, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Das Verlinken zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix mit \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass es den Wert `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies vorkommen kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_, einer Zeichenkette in eckigen Klammern (wie `[LegacyNullToEmptyString]`), versehen sein. Solche erweiterten Attribute geben spezielle Verhaltensweisen an, die im Text beschrieben werden müssen. Hier ist eine Liste der Standard-Erweiterten Attribute von Typen und der Ergänzungen, die gemacht werden müssen:

- `[LegacyNullToEmptyString]`

  - : Der `null`-Wert wird auf nicht standardmäßige Weise in einen String konvertiert. Der Standardweg besteht darin, ihn in den String `"null"` zu konvertieren, aber in diesem Fall wird er in `""` konvertiert.

    Fügen Sie folgenden Satz an das Ende des Abschnitts _Wert_ des Artikels hinzu:

    _Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibrechte auf der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht verändert werden. Es muss als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}}-Makro neben seinem Definitionsterm hinzugefügt wird.
- Im ersten Satz seiner eigenen Seite, indem die Beschreibung mit folgendem Satz beginnt: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft …_
- Indem seine Beschreibung auf der Schnittstellenseite mit _Gibt zurück …_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als 'zurückgebend' eines Wertes beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert zu setzen.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In manchen Fällen, wie wenn einige Werte ungültig sind, kann das Setzen eines neuen Wertes zu einer ausgelösten Ausnahme führen. Dies wird mit der `[SetterThrows]`-Anmerkung markiert. Wenn dies passiert, muss der Syntax-Abschnitt der Eigenschaftsseite einen Unterabschnitt für Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen für deren Auslösung sind als textliche Informationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert sind. [Der Versuch, einen ungültigen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) zu setzen, löst eine {{jsxref('TypeError')}}-Ausnahme aus. Dies muss dokumentiert werden, ist jedoch nur implizit im WebIDL-Dokument markiert.

Es ist ungewöhnlich, dass Getter Ausnahmen auslösen, obwohl dies in einigen Fällen vorkommt. In diesem Fall wird die `[GetterThrows]`-Anmerkung verwendet. Auch hier muss der Syntax-Abschnitt der Eigenschaftsseite einen Unterabschnitt für Ausnahmen haben.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen auslösen

Wenn die Semantik von WebIDL nicht befolgt wird, wird oft eine Ausnahme ausgelöst, selbst ohne dass `[SetterThrows]` oder `[GetterThrows]` gesetzt ist. Zum Beispiel, wenn wir im strikten Modus versuchen, einer schreibgeschützten Eigenschaft einen neuen Wert zuzuweisen, das heißt, ihren impliziten Setter aufzurufen, wird eine schreibgeschützte Eigenschaft im strikten Modus eine Ausnahme auslösen.

Häufig aus Kompatibilitätsgründen ist dieses Verhalten manchmal ärgerlich. Um dies zu verhindern, indem man einen No-Op-Setter erstellt (das heißt, indem jeder Versuch, die Eigenschaft auf einen neuen Wert zu setzen, stillschweigend ignoriert wird), kann die `[LenientSetter]`-Anmerkung verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird der Beschreibung der Eigenschaft ein zusätzlicher Satz hinzugefügt. Z.B.:

_Obwohl diese Eigenschaft schreibgeschützt ist, wird keine Ausnahme ausgelöst, wenn sie geändert wird (auch im strikten Modus); der Setter ist eine No-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erzeugtes synthetisches Objekt oder eine Referenz zu einem internen Objekt sein.

Einfache Objekte mit Typen wie {{jsxref("String")}} (die einem IDL `DOMString` oder anderem entsprechen), {{jsxref("Number")}} (die einem IDL `byte`, `octet`, `unsigned int` oder anderem entsprechen) und {{jsxref("Boolean")}} werden immer kopiert und es muss nichts Besonderes darüber gesagt werden (es ist ein natürliches Verhalten, das ein JavaScript-Entwickler erwartet.)

Für Schnittstellenobjekte ist es Standard, eine _Referenz_ auf das interne Objekt zurückzugeben. Dies muss sowohl in der kurzen Beschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, bezieht sich auf die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, selbst wenn sie im entsprechenden Interface als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dieser Fall wird im WebIDL mit der `[NewObject]`-Anmerkung angegeben.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: Wenn es geändert wird, wird der interne Wert nicht geändert, und eine Änderung des internen Wertes hat keinen Einfluss auf jede Objektinstanz. In der Dokumentation werden wir es markieren, indem wir das Adjektiv _neu_ neben das Objekt setzen:

_Die **`HTMLMediaElement.buffered`**-Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Fall einer Referenz zu einem Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir es explizit, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sein werden. Um dies zu markieren, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollections` oder `HTMLOptionsCollection`) sowohl in der Schnittstellenbeschreibung als auch in der Unterseite.

Zum Beispiel:

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine live \\{{domxref("HTMLFormControlsCollection")}} zurück, die…

### Verfügbarkeit in Workern

Die individuelle Verfügbarkeit von Eigenschaften in Workern ist ebenfalls im WebIDL zu finden. Für eine Eigenschaft ist die Standardverfügbarkeit die gleiche wie für die `interface` (das heißt, sie ist im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar, wenn nichts Spezielles markiert ist) oder wie für die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Webworkern verfügbar ist, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies ist auch im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die `textTracks`-Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann sich von einem Produkt, das Gecko verwendet, zu einem anderen unterscheiden).

## Methoden

Sie erkennen die Definition einer Methode am Vorhandensein von Klammern nach dem Namen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir werden uns in der Dokumentation auf sie als `HTMLMediaElement.canPlayType()` (mit den Klammern, die angeben, dass es sich um eine Methode handelt) beziehen, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Das Verlinken zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix mit \\{{domxref('HTMLMediaElement.canPlayType()') }} oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()') }} wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer inkludiert werden.

### Parameter

```js
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode sind im Abschnitt "Syntax" der Unterseite der Methode aufgelistet. Sie sind im WebIDL in der vorgegebenen Reihenfolge, zwischen den Klammern, als kommaseparierte Liste aufgeführt. Jeder Parameter hat einen Namen (oben angegeben) und einen Typ (z. B. ein `'?'` bedeutet, dass der `null`-Wert gültig ist.) Wenn als `optional` markiert, ist der Parameter optional in einem Methodenaufruf einzuschließen und muss, wenn er im Abschnitt "Syntax" aufgelistet ist, die \\{{OptionalInline}}-Flag enthalten. Der Standardwert des Parameters ist nach dem Gleichheitszeichen (`'='`) aufgeführt.

Parametertypen können spezielle Verhaltensweisen beschrieben haben, die mithilfe erweiterter Attribute (wie `[LegacyNullToEmptyString]`) beschrieben werden. Hier ist die Liste solcher Attribute und die Ergänzung, die Sie im Text vornehmen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie den folgenden Satz am Ende der Parameterbeschreibung hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird als leerer String (`""`) behandelt._

### Typ des Rückgabewerts

```webidl
DOMString canPlayType(DOMString type);
```

Der Typ des Rückgabewerts wird vor dem Methodennamen angegeben — in obigem Fall ist der Wert ein Objekt des Typs `DOMString`. Wenn der Rückgabetyp von einem Fragezeichen (`'?'`) gefolgt wird, kann auch ein Wert von `null` zurückgegeben werden, und die Dokumentation muss erklären, _wann_ dies auftreten kann. Wenn kein Fragezeichen vorhanden ist, kann der Rückgabewert wie hier nicht `null` sein.

Wenn der Rückgabewert das `void`-Schlüsselwort ist, bedeutet das, dass es keinen Rückgabewert gibt. Es ist kein Rückgabewerttyp. Wenn der WebIDL-Eintrag `void` liest, sollte der Abschnitt _Rückgabewert_ in den Dokumenten einfach "Keine (\{{jsxref("undefined")}})." angeben.

### Auslösende Exceptions

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird mit der `[Throws]`-Anmerkung markiert. Wenn dies passiert, muss der Syntax-Bereich der Methoden-Seite einen Unterabschnitt für Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als textliche Information in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert sind. [Versuch, einen illegalen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (zugeordnet zu einem JavaScript {{jsxref('String')}}) als Parameter zu setzen, wird eine {{jsxref('TypeError')}}-Ausnahme auslösen. Dies muss dokumentiert werden, ist jedoch nur implizit im WebIDL-Dokument markiert.

Werfen Sie einen Blick auf einen dieser [_Außer-Seiten_ Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions).

### Verfügbarkeit in Workern

Die individuelle Verfügbarkeit von Methoden in Workern ist auch im WebIDL zu finden. Für eine Methode ist die Standardverfügbarkeit die gleiche wie für die `interface` (das heißt, dass sie im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar ist, wenn nichts Spezielles markiert ist) oder wie für die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Webworkern verfügbar ist, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies ist auch im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die `addTextTrack()`-Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann sich von einem Produkt, das Gecko verwendet, zu einem anderen unterscheiden).

## Spezielle Methoden

Einige Methoden sind nicht als reguläre Methoden in WebIDL aufgeführt, sondern stattdessen als spezielle Schlüsselwörter, die in bestimmte Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Eine Stringifier gibt an, wie ein auf einer Schnittstelle basierendes Objekt in Kontexten, die einen String erwarten, aufgelöst wird. (Siehe den Abschnitt [Stringifiers](#stringifiers).) Zusätzlich wird das Schlüsselwort auf `toString()` abgebildet und wie folgt definiert:

```webidl
stringifier;
```

Die `toString()`-Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z. B. [`Range.toString()`](/de/docs/Web/API/Range/toString))

Ein Jsonifier wird auf `toJSON()` abgebildet und wie folgt definiert:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()`-Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z. B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON))

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` statt `jsonifier`. Dies wird in Gecko nicht verwendet — nur das nicht standardmäßige und wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterierbar_ definiert werden, was bedeutet, dass sie die folgenden Methoden hat: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} für ein Objekt, das diese Schnittstelle implementiert.

Es gibt zwei mögliche Arten von Iteration: den _Wert-Iterator_ und den _Paar-Iterator_

#### Wert-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte des Typs _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Indizes (die `unsigned long` sind) zurückgibt.
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt.
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel, die seine Indizes sind (die `unsigned long` sind), zurückgibt. Im Fall von Wert-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, das eine angegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator ermöglicht die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz dazu in der Schnittstellenbeschreibung hinzu.

Die Werte, die iteriert werden sollen, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, mittels der Notation `iterable<valueType>`. Zum Beispiel, siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit in der WebIDL-Datei, wenn die Schnittstelle indexierte Eigenschaften unterstützt. Dies wird angegeben, wenn die Schnittstelle `getter`-Methoden mit einem `unsigned long`-Parameter umfasst.
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text findet sich typischerweise in der Spezifikation und beginnt gewöhnlich mit: _"Die [Werte, über die iteriert werden soll](https://webidl.spec.whatwg.org/#dfn-value-iterator) …"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte des Typs _valueType_ mit Schlüsseln des Typs _keyType_ iterieren, das heißt die Wertpaare. Die generierten Methoden werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Wertpaare zurückgibt. Zum Beispiel, siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel, siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel, siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, das eine angegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator ermöglicht die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz dazu in der Schnittstellenbeschreibung hinzu, z.B. [`FormData`](/de/docs/Web/API/FormData).

Die Wertpaare, über die iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, mittels der Notation `iterable<keyType, valueType>`. Zum Beispiel, siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text findet sich typischerweise in der Spezifikation und beginnt gewöhnlich mit: _"Die [Wertpaare, über die iteriert werden soll](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over) …"_.

### Set-ähnliche Methoden

Eine Schnittstelle kann als _satz-ähnlich_ definiert werden, was bedeutet, dass sie einen _geordneten Satz von Werten_ darstellt und die folgenden Methoden haben wird: `entries()`, `keys()`, `values()`, `forEach()` und `has()` (sie hat auch die `size`-Eigenschaft). Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} für ein Objekt, das diese Schnittstelle implementiert. Das satz-ähnliche kann entweder `readonly` oder nicht vorgelagert sein. Wenn nicht schreibgeschützt, werden auch die Methoden zur Änderung des Satzes implementiert: `add()`, `clear()` und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Indizes zurückgibt. Zum Beispiel, siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel, siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel, siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, das eine angegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel, siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die satz-ähnliche Deklaration nicht schreibgeschützt vorgelagert ist, werden auch die folgenden Methoden generiert:

- `add()` fügt einen Eintrag hinzu. Zum Beispiel die `.add()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()` leert die satz-ähnliche Struktur. Zum Beispiel die `.clear()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()` entfernt einen Eintrag. Zum Beispiel die `.delete()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche satz-ähnliche Schnittstelle ermöglicht auch die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`.

## Spezielle Verhaltensweisen

Einige IDL-Mitglieder geben spezielle Verhaltensweisen an, die auf den entsprechenden Seiten vermerkt werden sollten.

### Stringifiers

Zusätzlich zum Hinzufügen der `toString()`-Methode zu einer Schnittstelle, wie in [toString() und toJSON()](#tostring_and_tojson) beschrieben, geben Stringifizierer auch an, dass eine Objektinstanz, wenn sie als String verwendet wird, einen anderen als den Standard-String zurückgibt. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts). Genau wie hängt davon ab, wie es im IDL spezifiziert ist. Unabhängig davon, wie das Verhalten vom Standard abweicht, sollte es auf der Schnittstellenseite beschrieben werden.

Wenn das Schlüsselwort `stringifier` zusammen mit einem Eigenschaftsnamen verwendet wird, hat die Referenzierung des Objektnamens das gleiche Resultat wie die Referenzierung des Eigenschaftsnamens. Betrachten Sie das folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse, die auf dieser Schnittstelle basiert, sind die folgenden Zeilen Code gleichwertig. Das Verhalten sollte auf der Eigenschaftsseite zusätzlich zur Schnittstellenseite vermerkt werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das Schlüsselwort `stringifier` allein verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten wird im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um herauszufinden, was eine Schnittstellenreferenz tatsächlich tut, lesen Sie die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind im WebIDL etwas versteckt: Sie sind als Anmerkungen der Hauptschnittstelle aufgeführt.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer bestimmten Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit der gleichen Schnittstelle wird durch die `Constructor`-Anmerkung an der Schnittstelle definiert. Es können Klammern und eine Parameterliste vorhanden sein oder nicht (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird das obige mit der Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` versehen.

Ein weiteres Beispiel für einen unbenannten Konstruktor mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es können auch mehrere unbenannte Konstruktoren vorhanden sein, die sich durch ihre Parameterlisten unterscheiden. Die gesamte Syntax wird in einer einzigen Unterseite dokumentiert.

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen als seine Schnittstelle hat. Zum Beispiel erstellt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL mit der `NamedConstructor`-Anmerkung an der Schnittstelle, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und den Parametern in den Klammern, im gleichen Format wie bei Methoden definiert.

Es können mehrere benannte Konstruktoren für eine spezifische Schnittstelle vorhanden sein, aber das ist extrem selten; in einem solchen Fall schließen wir eine Unterseite pro Namen ein.

### Neue Konstruktorsyntax

Seit September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax beinhaltet keine erweiterte Schnittstellenanmerkung mehr:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax, die `constructor` genannt wird, ohne explizit-definierten Rückgabetyp, geschrieben wie folgt:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dies bedeutet, dass erweiterte Attribute jetzt auf den Konstruktor angewendet werden können und nicht mehr davon ausgegangen wird, dass alle Konstruktoren Ausnahmen auslösen. Wenn ein Konstruktor Ausnahmen auslöst, wird `[Throws]` verwendet, um dies anzuzeigen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, daher werden Sie wahrscheinlich auf beide in freier Wildbahn treffen. Wir werden daher weiterhin beide Arten von Syntax hier behandeln.

### Verfügbarkeit in Workern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle oder Teilschnittstelle, auf der sie definiert sind. Die Unterseite bietet diese Information in der gleichen Weise wie für eine Methode.

### Präferenzen

Konstruktoren werden durch die gleiche Präferenz gesteuert wie die Schnittstelle oder Teilschnittstelle, in der sie definiert sind. Die Unterseite bietet diese Information in der gleichen Weise wie für eine Methode.
