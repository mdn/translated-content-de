---
title: Informationen in einer WebIDL-Datei
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 0d155984425e8964c889efb63ec39593e11bbc14
---

Beim Erstellen von Dokumentationen über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte, sowie das Modell; die Implementierungen beschreiben, was tatsächlich in die Browser integriert wurde. WebIDL-Dateien sind ein äußerst komprimierter Weg, um viele, aber nicht alle Informationen über die API zu geben. Dieses Dokument bietet eine Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist dazu konzipiert, APIs zu beschreiben. In der weiten Welt der Informatik gibt es verschiedene Arten von IDL. In der Welt der Browser heißt die von uns verwendete IDL _WebIDL_. Zwei Arten von WebIDL sind verfügbar: diejenige, die in der WebIDL-Spezifikation angegeben ist, und diejenige, die in Browsern implementiert ist. Die Spezifikation ist die kanonische Referenz, und die Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist und enthält zusätzliche Dinge wie Anmerkungen, Informationen über nicht standardmäßige Elemente und browserspezifische Erweiterungen der IDL-Spezifikation.

## Wo man WebIDL-Dateien findet

WebIDL kann an mehreren Stellen gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist ein sehr praktischer Weg, um präzise Definitionen zu vermitteln. Diese beschreiben die Syntax der API. Obwohl die kanonische Referenz existiert, müssen wir im Hinterkopf behalten, dass sie von der tatsächlichen Implementierung abweichen könnte. Auf MDN wollen wir praktisch sein und dokumentieren, was die Web-Plattform wirklich ist, nicht was sie idealerweise sein sollte. Überprüfen Sie daher, was dort mit Implementierungen vorhanden ist (und zögern Sie nicht, Fehler zu melden, wenn Sie Inkonsistenzen entdecken).
- Drei Browser-Engines verwenden (modifiziertes) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Vorgängerversionen von Edge vor Chromium benutzten es intern, aber diese sind leider nicht öffentlich zugänglich.
  - Für Gecko sind alle WebIDL-Dateien in einem Verzeichnis gruppiert: <https://searchfox.org/firefox-main/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellcode, aber sie sind nicht WebIDL, daher können Sie sie ignorieren. Ältere Versionen von Gecko haben einige ihrer WebIDL verstreut und verwenden möglicherweise sogar Mozillas IDL anstelle von WebIDL, um einige Web-Schnittstellen zu beschreiben, aber dies ist in keinem aktuellen Gecko-Code mehr ein Problem.
  - Für Chromium befinden sich diese an zwei Orten, beide Unterverzeichnisse des Quellcodes im Verzeichnis [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/): [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Der Chromium-Quellcode hat IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quellcode verstreut, daher müssen Sie etwas mehr suchen: Z.B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Aber es wurde so gestaltet, dass es erweitert werden kann, um mehr Informationen zu vermitteln, und Browser-Anbieter haben dies auch getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDL erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple auch eine [Seite](https://docs.webkit.org/Deep%20Dive/Architecture/JSWrappers.html) für seinen Dialekt verfügbar gemacht.

> [!NOTE]
> Wir beschreiben hier nur den Teil von WebIDL, der beim Verfassen von Dokumentationen am nützlichsten ist. Es gibt viele weitere Anmerkungen, die für Implementierer nützlich sind; um einen vollständigen Überblick zu erhalten, konsultieren Sie die vier oben verlinkten Dokumente.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die die allgemeinen Merkmale einer API beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist die Zeichenkette, die nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, auf der jeder Konstruktor, jede Eigenschaft und jede Methode aufgelistet sind, die dafür definiert sind.

### Vererbungskette

Das Elternteil, falls vorhanden, einer bestimmten Schnittstelle wird nach dem Schnittstellennamen definiert, nach einem Doppelpunkt (`':'`). Es kann jeweils nur ein Elternteil pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgelistet (mithilfe des \\{{APIRef}} Makros). Sie kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden stehen mehreren Schnittstellen zur Verfügung. Um die erneute Definition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen definiert, die _Mixins_ genannt werden.

Seit September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin` zur Definition einer Mixin-Schnittstelle, wie folgt:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Sie verwenden dann das Schlüsselwort `includes`, um anzugeben, dass die in einem Mixin definierten Eigenschaften für eine Schnittstelle verfügbar sind:

```webidl
MyInterface includes MyMixin;
```

Mixins haben keine Vererbung und können andere Mixins nicht einbeziehen. Sie unterstützen jedoch teilweise, sodass Sie Dinge wie dies sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke verbirgt MDN Mixins. Sie sind abstrakte und nur in der Spezifikation vorhandene Konstrukte. Sie können sie nicht in der Browser-Konsole sehen und es ist nützlicher zu wissen, auf welchen realen Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie ein Mixin in IDL begegnen, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils), suchen Sie nach den Schnittstellen, die das Mixin implementieren, z. B. [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass anstelle der Dokumentation `HTMLHyperlinkElementUtils`, Dokumentationen zu den konkreten Schnittstellen hinzugefügt werden, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Siehe die folgenden zwei Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten, konsultieren Sie die [Datenrichtlinie für Mixins in BCD](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines).

### Alte Mixin-Syntax

In der alten WebIDL Mixin-Syntax, die Sie immer noch an einigen Stellen sehen könnten, werden Mixins mit der Annotation `[NoInterfaceObject]` eingeführt:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf eine Schnittstelle implementiert sind, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in Fenstern und Arbeitern

Die Verfügbarkeit in Web-Workern (jeglicher Art) und im `Window`-Scope wird mit einer Anmerkung definiert: `[Exposed=(Window,Worker)]`. Die Anmerkung gilt für die Teilschnittstelle, mit der sie aufgelistet ist.

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

In diesem Fall ist `Performance.now()` im `Window`-Scope und für jeden Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Web-Worker verfügbar sind.

Die häufigsten Werte für `[Exposed]` sind:

- `Window`
  - : Die Teilschnittstelle ist im [`Window`](/de/docs/Web/API/Window) globalen Scope verfügbar.
- `Worker`
  - : Die Teilschnittstelle ist für jede Art von Worker verfügbar, das heißt, wenn der globale Scope ein Nachfahre von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Es ist auch für `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie nicht im Web sichtbar und nur für Firefox intern sind.)
- `DedicatedWorker`
  - : Die Teilschnittstelle ist nur im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die Teilschnittstelle ist nur im [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die Teilschnittstelle ist nur im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein anderer Wert ist möglich, wie `System`, aber dies hat eine [spezielle Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]` Anmerkung haben. Dies bedeutet, dass, wenn ein Objekt dieses Typs als globaler Scope verwendet wird, jede Schnittstelle, Eigenschaft oder Methode, mit `xyz` als einer Wert von `[Exposed]` verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier wird definiert, dass, wenn der globale Scope vom Typ `DedicatedWorkerGlobalScope` ist, also wenn wir in einem dedizierten Worker sind, jede Schnittstelle, Eigenschaft oder Methode, die mit der `[Exposed]`-Anmerkung an `Worker` oder `DedicatedWorker` exponiert ist, verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur in der Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer Teilschnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden, von einer Präferenz (meistens "pref" genannt) gesteuert werden. Dies wird ebenfalls im WebIDL markiert.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier steuert `media.webspeech.synth.enabled` die `SpeechSynthesis`-Schnittstelle und ihre Eigenschaften (die vollständige Liste hat mehr als 3).

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann sich von einem Produkt, das Gecko verwendet, zu einem anderen unterscheiden).

### Verfügbar nur in Systemcode

Einige Schnittstellenmerkmale sind möglicherweise nur im internen Systemcode des Browsers oder Chrome-Code verfügbar. Um dies anzuzeigen, verwenden wir in Gecko \[ChromeOnly], zum Beispiel ist die Eigenschaft `propName` im folgenden Beispiel nur über Chrome-Code aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Die Definition einer Eigenschaft kann an der Präsenz des Schlüsselworts `attribute` erkannt werden.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumenten werden wir ihn als `HTMLMediaElement.error` bezeichnen, da er zur `HTMLMediaElement`-Schnittstelle gehört. Eine Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix unter Verwendung von \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext klar und unmissverständlich ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass es einen Wert von `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies der Fall sein kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ versehen sein, einer Zeichenkette in eckigen Klammern (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute zeigen spezielles Verhalten an, das im Text beschrieben werden muss. Hier ist eine Liste typischer erweiterter Attribute und der Zusatz, der gemacht werden muss:

- `[LegacyNullToEmptyString]`
  - : Der `null`-Wert wird in nicht standardisierter Weise in einen String umgewandelt. Der Standardweg wäre, ihn in den `"null"`-String zu konvertieren, aber in diesem Fall wird er in `""` umgewandelt.

    Fügen Sie den folgenden Satz am Ende des _Wert_-Abschnitts des Artikels hinzu:

    _Wenn der `null`-Wert gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichwertig ist mit `elt.innerHTML = ""`._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibberechtigungen für die Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht verändert werden. Es muss als schreibgeschützt gekennzeichnet werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}}-Makro neben seinem Definitionsterm hinzugefügt wird.
- Im ersten Satz seiner eigenen Seite, indem die Beschreibung mit beginnt: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_
- Indem seine Beschreibung auf der Schnittstellenseite mit _Gibt zurück…_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als 'zurückgebend' beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch zum Setzen eines Wertes verwendet werden.

Einige Eigenschaften haben die `[PutForwards=xyz]`-Annotation. Dies bedeutet, dass die Eigenschaft eine Referenz auf ein anderes Objekt ist, und wenn ein neuer Wert zugewiesen wird, wird die Zuordnung an die `xyz`-Eigenschaft des referenzierten Objekts weitergeleitet.

Fügen Sie einen Absatz ähnlich dem folgenden am Ende des _Wert_-Abschnitts des Artikels hinzu:

_Obwohl die `style`-Eigenschaft selbst schreibgeschützt ist, im Sinne dessen, dass Sie das `CSSStyleDeclaration`-Objekt nicht ersetzen können, können Sie dennoch direkt an die `style`-Eigenschaft zuweisen, was gleichbedeutend mit der Zuweisung zu ihrer [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft ist. Sie können auch das `CSSStyleDeclaration`-Objekt mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern._

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie wenn einige Werte illegal sind, kann das Setzen eines neuen Werts dazu führen, dass eine Ausnahme ausgelöst wird. Dies wird mit der `[SetterThrows]`-Annotation markiert. Wenn dies geschieht, muss der Syntax-Abschnitt der Eigenschaftsseite einen Unterabschnitt Ausnahmen enthalten. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als Textinformationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, aber durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen illegalen enumerierten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) festzulegen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Es ist ungewöhnlich, dass Getter Ausnahmen auslösen, obwohl dies in einigen wenigen Fällen geschieht. In diesem Fall wird die `[GetterThrows]`-Annotation verwendet. Auch hier muss der Syntax-Abschnitt der Eigenschaftsseite einen Unterabschnitt Ausnahmen enthalten.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen auslösen

Wenn die Semantik von WebIDL nicht befolgt wird, wird oft eine Ausnahme ausgelöst, auch ohne `[SetterThrows]` oder `[GetterThrows]` gesetzt. Zum Beispiel, im strengen Modus, wenn wir versuchen, eine schreibgeschützte Eigenschaft auf einen neuen Wert zu setzen, das heißt, seinen impliziten Setter zu rufen, wird eine schreibgeschützte Eigenschaft im strengen Modus auslösen.

Meistens aus Kompatibilitätsgründen ist dieses Verhalten manchmal störend. Um dies zu verhindern, indem ein No-Op-Setter erstellt wird (das ist, indem jeder Versuch, die Eigenschaft auf einen neuen Wert zu setzen, stillschweigend ignoriert wird), kann die `[LenientSetter]`-Annotation verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird der Beschreibung der Eigenschaft ein zusätzlicher Satz hinzugefügt. Z.B.

_Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keinen Fehler werfen, wenn sie geändert wird (selbst im strengen Modus); der Setter ist eine No-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erzeugtes synthetisches Objekt oder eine Referenz zu einem internen Objekt sein.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (die einem IDL `DOMString` entsprechen oder andere), {{jsxref("Number")}} (die einem IDL `byte`, `octet`, `unsigned int` oder andere entsprechen), und {{jsxref("Boolean")}} werden immer kopiert und es muss nichts Besonderes darüber gesagt werden (es ist ein natürliches Verhalten, das von einem JavaScript-Entwickler erwartet wird.)

Bei Schnittstellenobjekten ist der Standard, eine _Referenz_ zum internen Objekt zurückzugeben. Dies muss sowohl in der kurzen Beschreibung in der Schnittstellenseite als auch in der Beschreibung in den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, bezieht sich auf die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, selbst wenn sie in der entsprechenden Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dieser Fall wird im WebIDL mit der `[NewObject]`-Annotation angezeigt.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall liefert jeder Aufruf von `buffered` ein anderes Objekt: eine Änderung dieses Objekts würde nicht den internen Wert ändern, und eine Änderung des internen Werts würde nicht jede Objektinstanz beeinflussen. In der Dokumentation markieren wir dies, indem wir das Adjektiv _neu_ neben das Objekt setzen:

_Die schreibgeschützte **`HTMLMediaElement.buffered`**-Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Falle einer Referenz zu einem Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir explizit, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sein werden. Um dies zu kennzeichnen, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollection` oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch in der Unterseite.

Z.B.

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine live \\{{domxref("HTMLFormControlsCollection")}} zurück, die…

### Verfügbarkeit in Workern

Die Verfügbarkeit von einzelnen Eigenschaften in Workern wird auch im WebIDL gefunden. Für eine Eigenschaft ist die Standardeinstellung die gleiche Verfügbarkeit wie die `interface` (das ist, verfügbar im [`Window`](/de/docs/Web/API/Window) Kontext nur wenn nichts Spezielles markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, ob sie in Web-Workern verfügbar ist oder nicht, direkt vor dem "Syntax"-Abschnitt.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur in der Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften von einer Präferenz gesteuert werden. Dies wird ebenfalls im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die `textTracks`-Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann sich von einem Produkt, das Gecko verwendet, zu einem anderen unterscheiden).

## Methoden

Die Definition einer Methode kann an der Präsenz von Klammern nach dem Namen erkannt werden.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir werden sie als `HTMLMediaElement.canPlayType()` (mit den Klammern, die anzeigen, dass es sich um eine Methode handelt) in den Dokumenten bezeichnen, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Eine Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Präfix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext klar und unmissverständlich ist. Die Klammern sollten immer enthalten sein.

### Parameter

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode werden im Syntax-Abschnitt der Methodenunterseite aufgelistet. Sie sind in der WebIDL in der Reihenfolge, zwischen den Klammern, als kommagetrennte Liste aufgelistet. Jeder Parameter hat einen Namen (wie oben angegeben) und einen Typ (z.B. ein `'?'` bedeutet, dass der `null`-Wert gültig ist.) Wenn mit `optional` markiert, ist der Parameter optional in einem Methodenaufruf enthalten und muss das \\{{optional_inline}}-Flag enthalten, wenn er im Syntax-Abschnitt aufgelistet ist. Der Standardwert des Parameters wird nach dem Gleichheitszeichen (`'='`) angegeben.

Parametertypen können spezielle Verhaltensweisen haben, die durch erweiterte Attribute beschrieben werden (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und der Zusatz, den Sie in den Text einfügen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie den folgenden Satz am Ende der Parameterbeschreibung hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`)._

### Typ des Rückgabewerts

```webidl
DOMString canPlayType(DOMString type);
```

Der Typ des Rückgabewerts wird vor dem Methodennamen angegeben — im obigen Fall ist der Wert ein Objekt vom Typ `DOMString`. Wenn der Rückgabetyp von einem Fragezeichen (`'?'`) gefolgt wird, kann auch ein Wert von `null` zurückgegeben werden, und die Dokumentation muss erklären, _wann_ dies der Fall sein kann. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das `void`-Schlüsselwort ist, bedeutet dies, dass es keinen Rückgabewert gibt. Es ist kein Rückgabewert Typ. Wenn der WebIDL-Eintrag `void` liest, sollte der _Rückgabewert_-Abschnitt in den Dokumenten einfach "None (\{{jsxref("undefined")}})." angeben.

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird mit der `[Throws]`-Annotation markiert. Wenn dies geschieht, muss der Syntax-Abschnitt der Methodenunterseite einen Unterabschnitt Ausnahmen enthalten. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als Textinformationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, aber durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen illegalen enumerierten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) als Parameter festzulegen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Schauen Sie sich einen dieser [_Exceptions_ Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Workern

Die Verfügbarkeit von einzelnen Methoden in Workern wird auch im WebIDL gefunden. Für eine Methode ist die Standardeinstellung die gleiche Verfügbarkeit wie die `interface` (das ist, verfügbar im [`Window`](/de/docs/Web/API/Window) Kontext nur wenn nichts Spezielles markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, ob sie in Web-Workern verfügbar ist, direkt vor dem Abschnitt Syntax.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur in der Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden von einer Präferenz gesteuert werden. Dies wird ebenfalls im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die `addTextTrack()`-Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann sich von einem Produkt, das Gecko verwendet, zu einem anderen unterscheiden).

## Besondere Methoden

Einige Methoden sind nicht als reguläre Methoden in WebIDL aufgelistet, sondern als spezielle Schlüsselwörter, die in spezifische Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifier gibt an, wie ein Objekt auf Basis einer Schnittstelle in Kontexten aufgelöst wird, die eine Zeichenkette erwarten. (Siehe den Abschnitt [Stringifier](#stringifier)). Zusätzlich wird das Schlüsselwort For a class based on this interface, the following lines of code below are equivalent. The behavior should be noted on the property page in addition to the interface page.```webidl
stringifier;

````

The `toString()` method is listed just like any other method of the interface and has its own sub-page (E.g. [`Range.toString()`](/de/docs/Web/API/Range/toString))

A jsonifier is mapped to `toJSON()` and defined as:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
````

The `toJSON()` method is listed just like any other method of the interface and has its own sub-page (E.g. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON))

> [!NOTE]
> The WebIDL specification uses `serializer` instead of `jsonifier`. This is not used in Gecko — only the non-standard likely early proposal `jsonifier` is found in mozilla-central.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterierbar_ definiert werden, d.h. dass sie über die folgenden Methoden verfügen wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei Arten von Iterationen, die möglich sind: den _Wert-Iterator_ und den _Paar-Iterator._

#### Wert-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte des Typs _valueType_ iterieren. Die erzeugten Methoden werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Indizes (die `unsigned long` sind) zurückgibt.
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Werte zurückgibt.
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Schlüssel zurückgibt, die seine Indizes (die `unsigned long` sind) sind. Im Falle von Wert-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`. Wir fügen einen Satz darüber in der Schnittstellenbeschreibung hinzu.

Die Werte, über die iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, unter Verwendung der Notation `iterable<valueType>`. Zum Beispiel sieh [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit in der WebIDL-Datei, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies ist angezeigt, wenn die Schnittstelle `getter`-Methoden mit einem Parameter vom Typ `unsigned long` enthält.
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text ist typischerweise in der Spezifikation zu finden und beginnt gewöhnlich mit: _"The [values to iterate over](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte des Typs _valueType_ mit Schlüsseln des Typs _keyType_ iterieren, das heißt über Wertpaare. Die erzeugten Methoden werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Wertpaare zurückgibt. Zum Beispiel siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Werte zurückgibt. Zum Beispiel siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Schlüssel zurückgibt. Zum Beispiel siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator erlaubt die Verwendung der Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`. Wir fügen einen Satz darüber in der Schnittstellenbeschreibung hinzu. Zum Beispiel siehe [`FormData`](/de/docs/Web/API/FormData).

Die Wertpaare, über die iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, unter Verwendung der Notation `iterable<keyType, valueType>`. Zum Beispiel siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb der WebIDL-Datei, im begleitenden Text. Ein solcher Text ist typischerweise in der Spezifikation zu finden und beginnt gewöhnlich mit: _"The [value pairs to iterate over](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Set-ähnliche Methoden

Eine Schnittstelle kann als _set-ähnlich_ definiert werden, das heißt, sie repräsentiert eine _geordnete Menge von Werten_ und wird über die folgenden Methoden verfügen: `entries()`, `keys()`, `values()`, `forEach()` und `has()` (sie verfügt auch über die `size`-Eigenschaft). Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Das set-ähnliche kann durch `readonly` oder nicht prefixiert sein. Wenn nicht schreibgeschützt, werden auch die Methoden implementiert, um das Set zu modifizieren: `add()`, `clear()` und `delete()`.

```webidl
setlike<valueType>
```

Die erzeugten Eigenschaften werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Indizes zurückgibt. Zum Beispiel siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Werte zurückgibt. Zum Beispiel siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Schlüssel zurückgibt. Zum Beispiel siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die set-ähnliche Deklaration nicht durch readonly prefixiert ist, werden die folgenden Methoden auch erzeugt:

- `add()` , die einen Eintrag hinzufügt. Zum Beispiel die `.add()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()` , die die set-ähnliche Struktur leert. Zum Beispiel die `.clear()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()` , die einen Eintrag entfernt. Zum Beispiel die `.delete()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche Set-Schnittstelle erlaubt auch die Verwendung der Syntax `for (const p in object)` als Kurzform von `for (const p in object.entries())`.

## Spezielles Verhalten

Einige IDL-Mitglieder geben ein spezielles Verhalten an, das auf den entsprechenden Seiten vermerkt werden sollte.

### Stringifier

Zusätzlich zur Hinzufügung der `toString()`-Methode zu einer Schnittstelle, wie in [toString() und toJSON()](#tostring_and_tojson) beschrieben, zeigen Stringifier auch an, dass eine Objektinstanz, wenn sie als Zeichenkette verwendet wird, eine andere Zeichenkette als die Standardzeichenkette zurückgibt. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts). Genauso wie dies hängt es davon ab, wie es in der IDL spezifiziert wird. Unabhängig davon sollte das nicht standardisierte Verhalten auf der Schnittstellenseite beschrieben werden.

Wenn das Schlüsselwort `stringifier` zusammen mit einem Eigenschaftsnamen verwendet wird, hat das Referenzieren des Objektnamens das gleiche Ergebnis wie das Referenzieren des Eigenschaftennamens. Betrachten Sie das folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine auf diesem Interface basierende Klasse sind die folgenden Zeilen von Code gleichwertig. Das Verhalten sollte auf der Eigenschaftsseite zusätzlich zur Schnittstellenseite vermerkt werden.

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

Um zu erfahren, was eine Schnittstellenreferenz tatsächlich macht, verweisen Sie auf die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind ein wenig versteckt in WebIDL: Sie sind als Anmerkungen der Hauptschnittstelle aufgeführt.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer bestimmten Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit der gleichen Schnittstelle wird mit der `Constructor`-Anmerkung auf der Schnittstelle definiert. Es kann Klammern und eine Liste von Parametern geben oder nicht (wie im obigen Beispiel.) Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird das oben mit dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` beschrieben.

Ein weiteres Beispiel für einen unbenannten Konstruktor, mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es können auch mehrere unbenannte Konstruktoren geben, die sich durch ihre Parameterlisten unterscheiden. Die gesamte Syntax wird in einer einzelnen Unterseite dokumentiert.

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen als der seiner Schnittstelle hat. Zum Beispiel `new Image(…)` erstellt ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL durch die `NamedConstructor`-Anmerkung auf der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und dem Parameter innerhalb der Klammern, im gleichen Format, wie Sie es für Methoden sehen werden.

Es können mehrere benannte Konstruktoren für eine bestimmte Schnittstelle vorhanden sein, aber dies ist extrem selten; in einem solchen Fall fügen wir eine Unterseite pro Name hinzu.

### Neue Konstruktorsyntax

Seit September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax umfasst keine erweiterte Attribut auf der Schnittstelle mehr:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax namens `constructor` ohne explizit definierte Rückgabetyp, der wie folgt geschrieben wird:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dies bedeutet, dass erweiterte Attribute jetzt auf dem Konstruktor angegeben werden können, und es wird nicht mehr davon ausgegangen, dass alle Konstruktoren Fehler werfen. Wenn ein Konstruktor einen Fehler wirft, wird `[Throws]` verwendet, um dies anzugeben:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, daher werden Sie wahrscheinlich auf beide Arten in freier Wildbahn stoßen. Wir werden daher weiterhin beide Syntaxarten hier abdecken.

### Verfügbarkeit in Workern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle, oder Teilschnittstelle, auf der sie definiert sind. Die Unterseite gibt diese Informationen auf die gleiche Weise wie für eine Methode an.

### Präferenzen

Konstruktoren werden durch die gleiche Präferenz gesteuert wie die Schnittstelle, oder Teilschnittstelle, auf der sie definiert sind. Die Unterseite gibt diese Informationen auf die gleiche Weise wie für eine Methode an.
