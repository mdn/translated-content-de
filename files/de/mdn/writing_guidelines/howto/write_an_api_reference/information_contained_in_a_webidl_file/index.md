---
title: Informationen in einer WebIDL-Datei
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Beim Schreiben von Dokumentationen zu einer API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte und das Modell, während die Implementierungen beschreiben, was tatsächlich in die Browser implementiert wurde. WebIDL-Dateien sind eine sehr komprimierte Art, viele, aber nicht alle Informationen über die API bereitzustellen. Dieses Dokument bietet eine Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_**, und sie ist dazu gedacht, APIs zu beschreiben. In der größeren Welt der Informatik gibt es mehrere Arten von IDL. In der Welt der Browser wird die IDL, die wir verwenden, _WebIDL_ genannt. Es gibt zwei Arten von WebIDL: die in der WebIDL-Spezifikation angegebene und die in Browsern implementierte. Die Spezifikation ist die maßgebliche Referenz, und die Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist, und enthält zusätzliche Dinge wie Anmerkungen, Informationen über nicht standardisierte Elemente und browserspezifische Erweiterungen der IDL-Spezifikation.

## Wo Sie WebIDL-Dateien finden

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr bequeme Möglichkeit, präzise Definitionen zu vermitteln. Diese beschreiben die Syntax der API. Obwohl die maßgebliche Referenz, müssen wir bedenken, dass sie sich von der tatsächlichen Implementierung unterscheiden kann. Auf MDN wollen wir pragmatisch sein und dokumentieren, was die Web-Plattform wirklich ist, nicht was sie idealerweise sein sollte. Überprüfen Sie daher, was dort mit Implementierungen vorhanden ist (und zögern Sie nicht, Fehler zu melden, wenn Sie Inkohärenzen entdecken).
- Drei Browser-Engines verwenden (modifizierte) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Pre-Chromium-Versionen von Edge verwendeten es intern, aber diese sind leider nicht öffentlich.
  - Für Gecko sind alle WebIDL-Dateien in einem einzigen Verzeichnis gruppiert: <https://searchfox.org/mozilla-central/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellcodebaum, aber sie sind nicht WebIDL, daher können Sie diese ignorieren. Ältere Versionen von Gecko haben einige ihrer WebIDL-Dateien verteilt und verwenden möglicherweise sogar Mozillas IDL anstelle von WebIDL, um einige Webschnittstellen zu beschreiben, aber das wird in keinem aktuellen Gecko-Code ein Problem darstellen.
  - Für Chromium sind sie an zwei Stellen zu finden, beide Unterverzeichnisse des Quellcodes im Verzeichnis [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/): [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Im Chromium-Quellcode gibt es IDL-Dateien an anderen Stellen, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quellcode verteilt, daher müssen Sie etwas genauer suchen: Z.B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Es wurde jedoch so entworfen, dass es erweitert werden kann, um mehr Informationen zu übermitteln, und Browser-Anbieter haben dies getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDL erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple ebenfalls eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt bereitgestellt.

> [!NOTE]
> Wir beschreiben hier nur den Teil von WebIDL, der am nützlichsten ist, wenn Sie Dokumentationen schreiben. Es gibt viele weitere Anmerkungen, die für Implementierer nützlich sind; beziehen Sie sich auf die vier oben verlinkten Dokumente, um einen vollständigen Überblick zu erhalten.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die die allgemeinen API-Funktionen beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist die Zeichenfolge, die nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, auf der jeder Konstruktor, jede Eigenschaft und jede Methode aufgelistet ist, die dafür definiert ist.

### Vererbungskette

Die Elternschnittstelle, falls vorhanden, einer gegebenen Schnittstelle wird nach dem Schnittstellennamen definiert, gefolgt von einem Doppelpunkt (`':'`). Es kann nur eine Elternschnittstelle pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgelistet (mit dem \\{{APIRef}}-Makro). Sie kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden sind für mehrere Schnittstellen verfügbar. Um eine Neudefinition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen namens _Mixins_ definiert.

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

Mixins haben keine Vererbung und können keine anderen Mixins enthalten. Sie unterstützen jedoch Partials, sodass Sie Dinge wie das Folgende sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke verbirgt MDN Mixins. Sie sind abstrakte und nur für Spezifikationen bestimmte Konstruktionen. Sie können sie nicht in der Browserkonsole sehen, und es ist nützlicher zu wissen, in welchen realen Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie auf ein Mixin in IDL stoßen, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils), suchen Sie nach den Schnittstellen, die das Mixin implementieren, zum Beispiel [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mitglieder des Mixins direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass anstatt `HTMLHyperlinkElementUtils` zu dokumentieren, Dokumentationen zu den konkreten Schnittstellen hinzugefügt werden, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Siehe die folgenden zwei Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenguideline für Mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die Sie noch an einigen Stellen finden könnten, werden Mixins mit der Annotation `[NoInterfaceObject]` vorangestellt:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf einer Schnittstelle implementiert sind, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit im Fenster und in Workern

Die Verfügbarkeit in Web-Workern (jeglicher Art) und im Window-Kontext wird durch eine Annotation definiert: `[Exposed=(Window,Worker)]`. Die Annotation gilt für die partielle Schnittstelle, mit der sie aufgelistet ist.

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

In diesem Fall ist `Performance.now()` im `Window`-Kontext und in jedem Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Web-Worker verfügbar sind.

Die gebräuchlichsten Werte für `[Exposed]` sind:

- `Window`
  - : Die partielle Schnittstelle ist im globalen Kontext [`Window`](/de/docs/Web/API/Window) verfügbar.
- `Worker`
  - : Die partielle Schnittstelle ist in jeder Art von Worker verfügbar, also wenn der globale Kontext ein Nachfolger von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Es ist auch im `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar sind und intern in Firefox verwendet werden.)
- `DedicatedWorker`
  - : Die partielle Schnittstelle ist nur im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die partielle Schnittstelle ist nur im [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die partielle Schnittstelle ist nur im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein weiterer Wert ist möglich, wie `System`, aber dieser hat eine [besondere Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]`-Annotation haben. Das bedeutet, dass wenn ein Objekt dieses Typs als globaler Kontext verwendet wird, jede Schnittstelle, Eigenschaft oder Methode, mit `xyz` als Wert von `[Exposed]` verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier wird definiert, dass wenn der globale Kontext vom Typ `DedicatedWorkerGlobalScope` ist, das heißt, wenn wir uns in einem dedizierten Worker befinden, jede Schnittstelle, Eigenschaft oder Methode, die auf `Worker` oder `DedicatedWorker`-Kontexte – mithilfe der `[Exposed]`-Annotation – verfügbar gemacht wird.

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt zur Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer partiellen Schnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden, durch eine Präferenz gesteuert werden (normalerweise als "Pref" bezeichnet). Dies ist ebenfalls in der WebIDL vermerkt.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier steuert `media.webspeech.synth.enabled` die `SpeechSynthesis`-Schnittstelle und ihre Eigenschaften (die vollständige Auflistung hat mehr als drei).

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt in der WebIDL verfügbar (er kann je nach Produkt, das Gecko verwendet, unterschiedlich sein.)

### Nur im Systemcode verfügbar

Einige Schnittstellenfunktionen sind möglicherweise nur im internen Systemcode des Browsers oder im Chrome-Code verfügbar. Um dies zu kennzeichnen, verwenden wir in Gecko `[ChromeOnly]`. Zum Beispiel ist die Eigenschaft `propName` im folgenden Beispiel nur über den Chrome-Code ansprechbar:

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

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumenten werden wir sie als `HTMLMediaElement.error` bezeichnen, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Das Verlinken auf die Seite erfolgt entweder **mit** dem Schnittstellenpräfix mit der \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt des Typs `MediaError`. Das Fragezeichen (`'?'`) weist darauf hin, dass es den Wert `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies der Fall sein kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ versehen sein, einer Zeichenfolge, die in eckigen Klammern eingeschlossen ist (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute weisen auf spezielle Verhaltensweisen hin, die in der Prosa beschrieben werden müssen. Hier ist eine Liste standardmäßiger erweiterter Attribute von Typen und der Zusätze, die gemacht werden müssen:

- `[LegacyNullToEmptyString]`

  - : Der `null`-Wert wird in nicht standardmäßiger Weise in einen String konvertiert. Die Standardmethode ist die Umwandlung in einen `"null"`-String, aber in diesem Fall wird er in `""` umgewandelt.

    Fügen Sie den folgenden Satz am Ende des _Wert_-Abschnitts des Artikels hinzu:

    _Wenn er auf den `null`-Wert gesetzt wird, wird dieser `null`-Wert in einen leeren String (`""`) konvertiert, daher ist `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""`._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibrechte für die Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht geändert werden. Sie muss als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}}-Makro neben seinem Definitionsterm hinzugefügt wird.
- Im ersten Satz auf ihrer eigenen Seite, indem die Beschreibung mit: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_ beginnt.
- Indem die Beschreibung auf der Schnittstellenseite mit _Gibt zurück…_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als 'rückgebend' beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch genutzt werden, um einen Wert zu setzen.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie wenn einige Werte illegal sind, kann das Setzen eines neuen Wertes zu einer Ausnahme führen. Dies wird mit der `[SetterThrows]`-Annotation markiert. Wenn dies geschieht, _muss_ der Abschnitt Syntax der Eigenschaftsseite einen Abschnitt Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind in der Spezifikation dieser API als Textinformation aufgelistet.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern von den JavaScript-Bindungen definiert sind. [Der Versuch, einen illegalen Aufzählungswert](https://webidl.spec.whatwg.org/#es-enumeration) (zugeordnet zu einem JavaScript {{jsxref('String')}}) zu setzen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist jedoch nur implizit in der WebIDL-Dokument markiert.

Es ist selten, dass Getter Ausnahmen auslösen, obwohl es in einigen Fällen passiert. In diesem Fall wird die `[GetterThrows]`-Annotation verwendet. Hier auch _muss_ der Abschnitt Syntax der Eigenschaftsseite einen Abschnitt Ausnahmen haben.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen auslösen

Wenn die Semantik von WebIDL nicht befolgt wird, wird oft eine Ausnahme ausgelöst, selbst ohne dass `[SetterThrows]` oder `[GetterThrows]` gesetzt sind. Wenn wir beispielsweise versuchen, eine schreibgeschützte Eigenschaft in einen neuen Wert zu setzen, das heißt ihren impliziten Setter aufzurufen, wird eine schreibgeschützte Eigenschaft im strikten Modus eine Ausnahme werfen.

Hauptsächlich aus Kompatibilitätsgründen ist dieses Verhalten manchmal störend. Um dies zu verhindern, indem Sie einen Setter ohne Operation erstellen (indem jeder Versuch, die Eigenschaft in einen neuen Wert zu setzen, stillschweigend ignoriert wird), kann die `[LenientSetter]`-Annotation verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird der Beschreibung der Eigenschaft ein zusätzlicher Satz hinzugefügt. Z.B.

_Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keine Ausnahme auslösen, wenn sie modifiziert wird (auch im strikten Modus); der Setter ist eine No-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz zu einem internen Objekt sein.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (als IDL `DOMString` oder andere), {{jsxref("Number")}} (als IDL `byte`, `octet`, `unsigned int` oder andere) und {{jsxref("Boolean")}} werden immer kopiert und es muss nichts Besonderes über sie bemerkt werden (es ist ein natürliches Verhalten, das von einem JavaScript-Entwickler erwartet wird).

Für Schnittstellenobjekte ist der Standard, eine _Referenz_ auf das interne Objekt zurückzugeben. Dies muss sowohl in der Kurzbeschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den speziellen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, bezieht sich auf die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, selbst wenn sie in der entsprechenden Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen zurückgeben. Dieser Fall wird in der WebIDL mit der `[NewObject]`-Annotation angegeben.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: Wenn es geändert wird, ändert es nicht den internen Wert und eine Änderung des internen Werts wirkt sich nicht auf jede Objektinstanz aus. In der Dokumentation kennzeichnen wir dies, indem wir das Adjektiv _neu_ neben das Objekt stellen:

_Die **`HTMLMediaElement.buffered`**-Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Fall einer Referenz auf ein Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`) machen wir explizit, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sein werden. Um dies zu kennzeichnen, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollections` oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch in der Unterseite.

Z.B.

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine live \\{{domxref("HTMLFormControlsCollection")}} zurück, die…

### Verfügbarkeit in Workern

Die individuelle Verfügbarkeit von Eigenschaften in Workern findet sich auch in der WebIDL. Für eine Eigenschaft ist der Standard die gleiche Verfügbarkeit wie die `Schnittstelle` (das heißt, verfügbar im [`Window`](/de/docs/Web/API/Window)-Kontext, wenn nichts Besonderes markiert ist) oder die `partielle Schnittstelle`, in der sie definiert ist.

Zur Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist oder nicht, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt zur Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies ist ebenfalls in der WebIDL vermerkt.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die `textTracks`-Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt in der WebIDL verfügbar (er kann je nach Produkt, das Gecko verwendet, unterschiedlich sein).

## Methoden

Sie können die Definition einer Methode am Vorhandensein von Klammern nach dem Namen erkennen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir werden darauf als `HTMLMediaElement.canPlayType()` (mit den Klammern, die anzeigen, dass es sich um eine Methode handelt) in den Dokumenten verweisen, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Das Verlinken auf die Seite erfolgt entweder **mit** dem Schnittstellenpräfix mit der \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer enthalten sein.

### Parameter

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode sind im Abschnitt Syntax der Methodenunterseite aufgelistet. Sie sind in der WebIDL in Reihenfolge, zwischen den Klammern, als kommagetrennte Liste aufgelistet. Jeder Parameter hat einen Namen (oben angegeben) und einen Typ (z.B. ein `'?'` bedeutet, dass der `null`-Wert gültig ist.) Wenn `optional` markiert, ist der Parameter optional, ein Aufruf der Methode muss die \\{{optional_inline}}-Markierung enthalten, wenn er im Abschnitt Syntax aufgelistet ist. Der Standardwert des Parameters ist nach dem Gleichheitszeichen (`'='`) angegeben.

Parametertypen können spezielle Verhaltensweisen beschrieben mit erweiterten Attributen haben (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute, und der Zusatz, den Sie in der Prosa machen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie den folgenden Satz am Ende der Parameterbeschreibung hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`)._

### Typ des Rückgabewerts

```webidl
DOMString canPlayType(DOMString type);
```

Der Typ des Rückgabewerts wird vor dem Methodennamen angegeben — im obigen Fall ist der Wert ein Objekt des Typs `DOMString`. Wenn der Rückgabewert von einem Fragezeichen (`'?'`) gefolgt ist, kann auch ein `null`-Wert zurückgegeben werden, und die Dokumentation muss erklären, _wann_ dies geschehen kann. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das `void`-Schlüsselwort ist, bedeutet es, dass es keinen Rückgabewert gibt. Es ist kein Rückgabewerttyp. Wenn der WebIDL-Eintrag `void` liest, sollte der _Rückgabewert_-Abschnitt in den Dokumenten einfach "Kein (\{{jsxref("undefined")}})." angeben.

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird mit der `[Throws]`-Annotation markiert. Wenn dies geschieht, _muss_ der Abschnitt Syntax der Methodenseite einen Abschnitt Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind in der Spezifikation dieser API als Textinformation aufgelistet.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern von den JavaScript-Bindungen definiert sind. [Der Versuch, einen illegalen Aufzählungswert](https://webidl.spec.whatwg.org/#es-enumeration) (zugeordnet zu einem JavaScript {{jsxref('String')}}) als Parameter zu setzen, wird eine {{jsxref('TypeError')}}-Ausnahme führen. Dies muss dokumentiert werden, ist jedoch nur implizit in der WebIDL-Dokument markiert.

Sehen Sie sich einen dieser [_Ausnahmen_-Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Workern

Die individuelle Verfügbarkeit von Methoden in Workern findet sich auch in der WebIDL. Für eine Methode ist der Standard die gleiche Verfügbarkeit wie die `Schnittstelle` (das heißt, verfügbar im [`Window`](/de/docs/Web/API/Window)-Kontext, wenn nichts Besonderes markiert ist) oder die `partielle Schnittstelle`, in der sie definiert ist.

Zur Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist oder nicht, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Abschnitt zur Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies ist ebenfalls in der WebIDL vermerkt.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die `addTextTrack()`-Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt in der WebIDL verfügbar (er kann je nach Produkt, das Gecko verwendet, unterschiedlich sein).

## Spezielle Methoden

Einige Methoden werden nicht als reguläre Methoden in WebIDL aufgelistet, sondern stattdessen als spezielle Schlüsselwörter, die in spezifische Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifizierer gibt an, wie ein Objekt basierend auf einer Schnittstelle in Kontexten, die einen String erwarten, aufgelöst wird. (Siehe den Abschnitt [Stringifizierer](#stringifizierer).) Zusätzlich wird das Schlüsselwort auf `toString()` abgebildet und wie folgt definiert:

```webidl
stringifier;
```

Die `toString()`-Methode wird genauso wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Range.toString()`](/de/docs/Web/API/Range/toString)).

Ein Jsonifizierer wird auf `toJSON()` abgebildet und wie folgt definiert:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()`-Methode wird genauso wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON)).

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur der nicht standardisierte, wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterable_ definiert sein, was bedeutet, dass sie die folgenden Methoden haben wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem implementierenden Objekt dieser Schnittstelle.

Es gibt zwei Arten von Iteration möglich: der _Werte-Iterator_ und der _Paar-Iterator._

#### Werte-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte des Typs _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes (die `unsigned long` sind) zurückgibt.
- `values()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt.
- `keys()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt, die ihre Indizes (die `unsigned long` sind) sind. Im Fall von Werte-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator erlaubt es, die Syntax `for (const p in object)` zu verwenden, als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein.

Die Werte, über die iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, unter Verwendung der `iterable<valueType>`-Notation. Zum Beispiel siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit in der WebIDL-Datei, wenn die Schnittstelle indexierte Eigenschaften unterstützt. Dies wird angegeben, wenn die Schnittstelle `getter`-Methoden mit einem Parameter vom Typ `unsigned long` enthält.
- Außerhalb der WebIDL-Datei, in der begleitenden Prosa. Diese Prosa ist typischerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"The [values to iterate over](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte des Typs _valueType_ mit Schlüsseln des Typs _keyType_ iterieren, das heißt die Wertepaaren. Die generierten Methoden werden sein:

- `entries()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Wertepaaren zurückgibt. Zum Beispiel siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Zum Beispiel siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Zum Beispiel siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator erlaubt es, die Syntax `for (const p in object)` zu verwenden, als Abkürzung für `for (const p in object.entries())`. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein. Z. B. [`FormData`](/de/docs/Web/API/FormData).

Die Wertepaaren, über die iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei, unter Verwendung der `iterable<keyType, valueType>`-Notation. Zum Beispiel siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb der WebIDL-Datei, in der begleitenden Prosa. Solch eine Prosa ist typischerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"The [value pairs to iterate over](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Set-ähnliche Methoden

Eine Schnittstelle kann als _set-like_ definiert sein, was bedeutet, dass sie eine _geordneten Menge an Werten_ darstellt und die folgenden Methoden haben wird: `entries()`, `keys()`, `values()`, `forEach()` und `has()` (sie hat auch die `size`-Eigenschaft). Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem implementierenden Objekt dieser Schnittstelle. Das set-like kann als `readonly` oder nicht gekennzeichnet sein. Wenn es nicht schreibgeschützt ist, werden auch die Methoden implementiert, um das Set zu verändern: `add()`, `clear()` und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes zurückgibt. Zum Beispiel siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Zum Beispiel siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, die einen [`Iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Zum Beispiel siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, das eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die set-like-Deklaration nicht durch schreibgeschützt vorangestellt ist, werden die folgenden Methoden ebenfalls generiert:

- `add()` die einen Eintrag hinzufügt. Z. B. die `.add()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()` die das set-like-Datenstruktur leert. Z. B. die `.clear()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()` die einen Eintrag entfernt. Z. B. die `.delete()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche set-Schnittstelle erlaubt auch die Verwendung der Syntax `for (const p in object)` als Abkürzung für `for (const p in object.entries())`.

## Spezielle Verhaltensweisen

Einige IDL-Mitglieder geben spezielle Verhaltensweisen an, die auf den entsprechenden Seiten über beachtet werden sollten.

### Stringifizierer

Zusätzlich zum Hinzufügen der `toString()`-Methode zu einer Schnittstelle, wie unter [toString() und toJSON()](#tostring_and_tojson) beschrieben, geben Stringifizierer auch an, dass eine Objektinstanz, wenn sie als String verwendet wird, einen anderen String als den Standard zurückgibt. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts). Wie genau hängt von der Weise ab, wie es in der IDL spezifiziert ist. Unabhängig vom Wie sollte das nicht-standardmäßige Verhalten auf der Schnittstellenseite beschrieben werden.

Wenn das `stringifier`-Schlüsselwort einen Attributnamen begleitet, hat das Referenzieren des Objektnamens das gleiche Ergebnis wie das Referenzieren des Attributnamens. Betrachten Sie das folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse, die auf dieser Schnittstelle basiert, sind die folgenden Zeilen des Codes gleichwertig. Das Verhalten sollte sowohl auf der Eigenschaftsseite als auch auf der Schnittstellenseite erläutert werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das `stringifier`-Schlüsselwort allein verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten ist im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu erfahren, was ein Schnittstellenverweis tatsächlich tut, beziehen Sie sich auf die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um deren Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind in WebIDL ein wenig versteckt: Sie sind als Annotationen der Hauptschnittstelle aufgelistet.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer bestimmten Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit der gleichen Schnittstelle ist unter Verwendung der `Constructor`-Annotation auf der Schnittstelle definiert. Es kann Klammern und eine Liste von Parametern geben oder nicht (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird das oben erwähnte das Slug _Web/API/MessageChannel/MessageChannel_ und der Titel `MessageChannel()` gegeben.

Ein weiteres Beispiel für einen unbenannten Konstruktor, mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es kann auch mehrere unbenannte Konstruktoren geben, die sich durch ihre Parameterlisten unterscheiden. Alle Syntaxen werden in einer einzigen Unterseite dokumentiert.

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen als den seiner Schnittstelle hat. Zum Beispiel erstellt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden in der WebIDL unter Verwendung der `NamedConstructor`-Annotation auf der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und den Parametern in den Klammern, im selben Format, das Sie für Methoden sehen werden.

Es kann mehrere benannte Konstruktoren für eine spezifische Schnittstelle geben, aber dies ist extrem selten; in einem solchen Fall beinhalten wir eine Unterseite pro Name.

### Neue Konstruktorsyntax

Seit September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax verwendet keine erweiterte Eigenschaft mehr auf der Schnittstelle:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenartige Syntax namens `constructor` ohne explizit definierten Rückgabetyp, geschrieben wie folgt:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dies bedeutet, dass erweiterte Attribute jetzt auf den Konstruktor spezifiziert werden können, und es wird nicht mehr davon ausgegangen, dass alle Konstruktoren Ausnahmen werfen. Wenn ein Konstruktor eine Ausnahme wirft, wird `[Throws]` verwendet, um dies anzuzeigen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen auf die neue Syntax aktualisiert werden, daher werden Sie wahrscheinlich auf beide in der freien Wildbahn stoßen. Wir werden daher weiterhin beide Arten von Syntax hier behandeln.

### Verfügbarkeit in Workern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle oder partielle Schnittstelle, auf der sie definiert sind. Die Unterseite liefert diese Informationen auf die gleiche Weise wie bei einer Methode.

### Präferenzen

Konstruktoren werden von der gleichen Präferenz gesteuert wie die Schnittstelle oder partielle Schnittstelle, auf der sie definiert sind. Die Unterseite liefert diese Informationen auf die gleiche Weise wie bei einer Methode.
