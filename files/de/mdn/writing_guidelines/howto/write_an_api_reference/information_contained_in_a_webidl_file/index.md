---
title: Informationen in einer WebIDL-Datei
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Beim Erstellen von Dokumentationen über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte sowie das Modell, und die Implementierungen beschreiben, was tatsächlich in den Browsern vorhanden ist. WebIDL-Dateien sind eine sehr komprimierte Art, viele, aber nicht alle, Informationen über die API zu liefern. Dieses Dokument bietet eine Referenz, um WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist dazu gedacht, APIs zu beschreiben. In der weiteren Welt der Informatik gibt es mehrere Arten von IDLs. In der Welt der Browser verwenden wir die IDL namens _WebIDL_. Es gibt zwei Arten von WebIDL: Die in der WebIDL-Spezifikation definierte und die in Browsern implementierte. Die Spezifikation ist die kanonische Referenz, und das Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist, und enthält zusätzliche Dinge wie Anmerkungen, Informationen über nicht standardmäßige Elemente und browser-spezifische Erweiterungen der IDL-Spezifikation.

## Wo man WebIDL-Dateien findet

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr praktische Möglichkeit, präzise Definitionen zu vermitteln. Diese beschreiben die Syntax der API. Obwohl die kanonische Referenz, müssen wir im Hinterkopf behalten, dass sie von der tatsächlichen Implementierung abweichen kann. Auf MDN wollen wir praktisch sein und dokumentieren, was die Webplattform wirklich ist, nicht, wie sie idealerweise sein sollte. Also überprüfen Sie, was dort mit Implementierungen vorhanden ist (und zögern Sie nicht, Bugs zu melden, wenn Sie Inkonsistenzen entdecken).
- Drei Browser-Engines verwenden (modifiziertes) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Vor-Chromium-Versionen von Edge verwendeten es intern, aber diese sind leider nicht öffentlich.
  - Für Gecko sind alle WebIDL-Dateien in einem einzigen Verzeichnis gruppiert: <https://searchfox.org/firefox-main/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellbaum, aber sie sind nicht WebIDL, also können sie ignoriert werden. Ältere Versionen von Gecko haben einige ihrer WebIDL verstreut und können sogar Mozillas IDL anstelle von WebIDL verwenden, um einige Webschnittstellen zu beschreiben, aber dies wird in keinem aktuellen Gecko-Code ein Problem darstellen.
  - In Chromium befinden sie sich an zwei Orten, beide Unterbäume des `renderer/`-Verzeichnisses des Quellcodes: [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Der Chromium-Quellcode verfügt über IDL-Dateien an anderen Orten, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quellcode verstreut, sodass Sie ein wenig tiefer graben müssen: Z.B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Aber es wurde so entworfen, dass es erweitert werden kann, um mehr Informationen zu vermitteln, und Browseranbieter haben dies getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDLs erstellt.
- Für Chromium hat Google auch ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple auch eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt verfügbar gemacht.

> [!NOTE]
> Wir beschreiben hier nur den Teil von WebIDL, der beim Schreiben von Dokumentationen am nützlichsten ist. Es gibt viele weitere Anmerkungen, die für Implementierer nützlich sind; beziehen Sie sich auf die oben verlinkten vier Dokumente, um einen vollständigen Überblick zu erhalten.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die allgemeine API-Funktionen beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist der String, der nach dem Schlüsselwort `interface` und vor der nächsten öffnenden Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, auf der jeder Konstruktor, jede Eigenschaft und jede Methode, die darin definiert ist, aufgelistet wird.

### Vererbungskette

Das übergeordnete Element, falls vorhanden, einer gegebenen Schnittstelle wird nach dem Schnittstellennamen definiert, nach einem Doppelpunkt (`':'`). Es kann nur ein übergeordnetes Element pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgelistet (unter Verwendung des \\{{APIRef}} Makros). Es kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden sind für mehrere Schnittstellen verfügbar. Um Neudefinitionen zu verhindern, werden sie in speziellen WebIDL-Schnittstellen namens _Mixins_ definiert.

Ab September 2019 wurde die Mixinsyntax aktualisiert. In der neuen Syntax verwendet man `interface mixin`, um eine Mixin-Schnittstelle zu definieren, so:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Dann verwenden Sie das Schlüsselwort `includes`, um anzugeben, dass die in einem Mixin definierten Eigenschaften in einer Schnittstelle verfügbar sind:

```webidl
MyInterface includes MyMixin;
```

Mixins haben keine Vererbung und können keine anderen Mixins einschließen. Sie unterstützen jedoch Partials, sodass Sie Dinge wie Folgendes sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Zu Dokumentationszwecken verbirgt MDN Mixins. Sie sind abstrakt und nur für Spezifikationszwecke vorgesehen.
Man kann sie in der Browserkonsole nicht sehen, und es ist nützlicher zu wissen, auf welchen echten Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie auf ein Mixin in der IDL stoßen, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils),
suchen Sie nach den Schnittstellen, die das Mixin implementieren, zum Beispiel
[HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt in diesen Schnittstellen.

In der Praxis bedeutet dies, anstatt `HTMLHyperlinkElementUtils` zu dokumentieren,
werden die Dokumente zu den konkreten Schnittstellen hinzugefügt, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)
und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Siehe die folgenden beiden Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für kompatible Daten konsultieren Sie die [Datenschema-Richtlinien für Mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).

### Alte Mixinsyntax

In der alten WebIDL-Mixinsyntax, die Sie noch an einigen Stellen antreffen könnten, werden Mixins mit der `[NoInterfaceObject]`-Annotation vorangestellt:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf einer Schnittstelle implementiert sind, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in `window` und `workers`

Die Verfügbarkeit in Webworkern (jeglicher Art) und im `Window`-Kontext wird mit einer Annotation definiert: `[Exposed=(Window,Worker)]`. Die Annotation gilt für die partielle Schnittstelle, mit der sie aufgeführt ist.

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

In diesem Fall ist `Performance.now()` sowohl im `Window`-Kontext als auch für jeden Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` für Webworker nicht verfügbar sind.

Die häufigsten Werte für `[Exposed]` sind:

- `Window`
  - : Die partielle Schnittstelle ist im globalen [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar.
- `Worker`
  - : Die partielle Schnittstelle ist für jede Art von Worker verfügbar, d.h. wenn der globale Kontext ein Nachkömmling von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Es ist auch für `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar und intern für Firefox sind.)
- `DedicatedWorker`
  - : Die partielle Schnittstelle ist nur im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die partielle Schnittstelle ist nur im [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die partielle Schnittstelle ist nur im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein weiterer möglicher Wert ist `System`, aber dieser hat eine [besondere Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]`-Annotation haben. Dies bedeutet, dass, wenn ein Objekt dieses Typs als globaler Kontext verwendet wird, jede Schnittstelle, Eigenschaft oder Methode mit `xyz` als Wert von `[Exposed]` verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier ist definiert, dass, wenn der globale Kontext vom Typ `DedicatedWorkerGlobalScope` ist, sobald wir in einem dedizierten Worker sind, jede Schnittstelle, Eigenschaft oder Methode, die mit der `[Exposed]`-Annotation als `Worker` oder `DedicatedWorker` verfügbar ist, verfügbar ist.

### Einstellungen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Bereich der Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer partiellen Schnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden, durch eine Einstellung (üblicherweise als "pref" bezeichnet) kontrolliert werden. Dies wird auch im WebIDL markiert.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier steuert `media.webspeech.synth.enabled` die `SpeechSynthesis`-Schnittstelle und ihre Eigenschaften (die vollständige Auflistung hat mehr als drei.)

> [!NOTE]
> Der Standardwert der Einstellung ist nicht direkt im WebIDL verfügbar (sie kann zwischen Produkten, die Gecko verwenden, variieren).

### Nur im Systemcode verfügbar

Einige Schnittstellenfunktionen sind möglicherweise nur im internen Systemcode des Browsers oder im Chromecode verfügbar. Um dies anzuzeigen, verwenden wir in Gecko \[ChromeOnly], z. B. ist die Eigenschaft propName im folgenden Beispiel nur über Chromecode aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Man kann die Definition einer Eigenschaft an der Anwesenheit des Schlüsselworts `attribute` erkennen.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Dokumenten wird sie als `HTMLMediaElement.error` bezeichnet, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellen-Präfix über \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix über \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass es den Wert `null` haben kann, und die Dokumentation muss erklären, _wann_ dies passieren kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ vorangestellt werden, einem in eckige Klammern eingeschlossenen String (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute weisen auf spezielle Verhaltensweisen hin, die im Text beschrieben werden müssen. Hier ist eine Liste von standardmäßigen erweiterten Attributen von Typen und der Ergänzung, die gemacht werden muss:

- `[LegacyNullToEmptyString]`
  - : Der `null`-Wert wird auf nicht-standardisierte Weise in einen String umgewandelt. Der Standardweg ist die Umwandlung in den String `"null"`, aber in diesem Fall wird es in `""` umgewandelt.

    Fügen Sie den folgenden Satz am Ende des _Wert_-Abschnitts des Artikels hinzu:

    _Wenn der Wert `null` festgelegt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt. Daher ist `elt.innerHTML = null` äquivalent zu `elt.innerHTML = ""`._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibrechte auf der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht geändert werden. Sie muss als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}} Makro neben dem Definitionsterm hinzugefügt wird.
- Im ersten Satz ihrer eigenen Seite, indem die Beschreibung mit folgendem Satz beginnt: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_
- Indem ihre Beschreibung auf der Schnittstellenseite mit _Gibt zurück…_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als "gebende" Werte beschrieben werden. Nicht-schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert zu setzen.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie zum Beispiel bei illegalen Werten, kann das Festlegen eines neuen Werts dazu führen, dass eine Ausnahme geworfen wird. Dies wird mit der `[SetterThrows]`-Annotation markiert. Wenn dies geschieht, muss der Syntax-Abschnitt der Eigenschaftenseite einen Abschnitt für Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, bei denen sie geworfen werden, sind als textuelle Informationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert sind. [Der Versuch, einen illegalen enumerierten Wert festzulegen](https://webidl.spec.whatwg.org/#es-enumeration) (der zu einem JavaScript {{jsxref('String')}} abgebildet wird) führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Es ist ungewöhnlich, dass Getter Ausnahmen werfen, obwohl es in einigen wenigen Fällen passiert. In diesem Fall wird die `[GetterThrows]`-Annotation verwendet. Auch hier muss der Syntax-Abschnitt der Eigenschaftenseite einen Abschnitt für Ausnahmen haben.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahme werfen

Wenn die Semantik von WebIDL nicht befolgt wird, wird oft eine Ausnahme geworfen, selbst ohne `[SetterThrows]` oder `[GetterThrows]`. Zum Beispiel, im strikten Modus, wenn wir versuchen, einer schreibgeschützten Eigenschaft einen neuen Wert zuzuweisen, das heißt, ihren impliziten Setter zu rufen, wirft eine schreibgeschützte Eigenschaft im strikten Modus eine Ausnahme.

Hauptsächlich aus Kompatibilitätsgründen ist dieses Verhalten manchmal störend. Um dies zu verhindern, indem ein No-Op-Setter erstellt wird (das heißt, indem der Versuch, der Eigenschaft einen neuen Wert zuzuweisen, stillschweigend ignoriert wird), kann die `[LenientSetter]`-Annotation verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird der Beschreibung der Eigenschaft ein zusätzlicher Satz hinzugefügt. Z.B.:

_Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keine Ausnahme werfen, wenn sie geändert wird (auch im strikten Modus); der Setter ist eine No-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz auf ein internes Objekt sein.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (als IDL `DOMString`, oder andere), {{jsxref("Number")}} (als IDL `byte`, `octet`, `unsigned int`, oder andere) und {{jsxref("Boolean")}} werden immer kopiert und es muss nichts Besonderes darüber vermerkt werden (es ist ein natürliches Verhalten, das von einem JavaScript-Entwickler erwartet wird.)

Für Schnittstellenobjekte ist die Standardeinstellung, eine _Referenz_ auf das interne Objekt zurückzugeben. Dies muss sowohl in der kurzen Beschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den spezifischen Unterseiten erwähnt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, wenn es mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, gilt für die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, selbst wenn sie in der relevanten Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt zurückgeben, oder eine _Kopie_ eines internen Objekts. Dieser Fall wird im WebIDL mit der `[NewObject]`-Annotation angezeigt.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall liefert jeder Aufruf von `buffered` ein anderes Objekt: eine Änderung daran wird den internen Wert nicht ändern, und eine Änderung im internen Wert wird jede Objektinstanz nicht beeinflussen. In der Dokumentation werden wir dies markieren, indem wir das Adjektiv _neu_ neben dem Objekt verwenden:

_Die **`HTMLMediaElement.buffered`** schreibgeschützte Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Fall einer Referenz auf ein Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection` oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir es explizit, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sein werden. Um dies zu kennzeichnen, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollections`, oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch auf der Unterseite.

Z.B.:

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt ein live \\{{domxref("HTMLFormControlsCollection")}} zurück, das…

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Eigenschaften in Workern ist auch im WebIDL zu finden. Für eine Eigenschaft ist der Standard dieselbe Verfügbarkeit wie die `Schnittstelle` (das heißt, sie ist nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar, es sei denn, es wird etwas Spezielles markiert) oder die `partielle Schnittstelle`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist, direkt vor dem "Syntax"-Abschnitt.

### Einstellungen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Bereich der Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies wird auch im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die Eigenschaft `textTracks`.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann zwischen Produkten, die Gecko verwenden, variieren).

## Methoden

Die Definition einer Methode erkennt man an den Klammern nach dem Namen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType` und wir werden sie als `HTMLMediaElement.canPlayType()` (mit den Klammern, die anzeigen, dass es sich um eine Methode handelt) in den Dokumenten bezeichnen, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung zur Seite erfolgt entweder **mit** dem Schnittstellen-Präfix über \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Präfix über \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer enthalten sein.

### Parameter

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode sind im Syntax-Abschnitt der Methoden-Unterseite aufgelistet. Sie sind im WebIDL in der angegebenen Reihenfolge, zwischen den Klammern, als durch Kommas getrennte Liste aufgeführt. Jeder Parameter hat einen Namen (wie oben angegeben) und einen Typ (z.B., ein `'?'` bedeutet, dass der `null`-Wert gültig ist.) Wenn mit `optional` markiert, ist der Parameter optional, um in einem Methodenaufruf einbezogen zu werden und muss das \\{{optional_inline}}-Flag enthalten, wenn er im Syntax-Abschnitt aufgeführt ist. Der Standardwert des Parameters wird nach dem Gleichheitszeichen (`'='`) angegeben.

Parameter-Typen können spezielle Verhaltensweisen haben, die mit erweiterten Attributen beschrieben werden (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und die Ergänzung, die Sie im Text machen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie folgenden Satz am Ende der Parameterbeschreibung hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`)._

### Typ des Rückgabewerts

```webidl
DOMString canPlayType(DOMString type);
```

Der Rückgabewert-Typ ist vor dem Methodennamen angegeben — im obigen Fall ist der Wert ein Objekt vom Typ `DOMString`. Wenn der Rückgabetyp von einem Fragezeichen (`'?'`) gefolgt wird, kann auch ein Wert von `null` zurückgegeben werden und die Dokumentation muss erklären, _wann_ dies passieren kann. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das Schlüsselwort `void` ist, bedeutet das, dass es keinen Rückgabewert gibt. Es ist kein Rückgabewert-Typ. Wenn der WebIDL-Eintrag `void` lautet, sollte der _Rückgabewert_ Abschnitt in den Dokumenten einfach "Keine (\{{jsxref("undefined")}})." angeben.

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Das wird mit der `[Throws]`-Annotation markiert. Wenn dies geschieht, muss der Syntax-Abschnitt der Methodenseite einen Abschnitt für Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, bei denen sie geworfen werden, sind als textuelle Informationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert sind. [Der Versuch, einen illegalen enumerierten Wert als Parameter festzulegen](https://webidl.spec.whatwg.org/#es-enumeration) (der zu einem JavaScript {{jsxref('String')}} abgebildet wird) wird eine {{jsxref('TypeError')}}-Ausnahme auslösen. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Schauen Sie sich einen dieser [_Ausnahmen_ Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Methoden in Workern ist ebenfalls im WebIDL zu finden. Für eine Methode ist der Standard dieselbe Verfügbarkeit wie die `Schnittstelle` (das heißt, sie ist nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar, es sei denn, es wird etwas Spezielles markiert) oder die `partielle Schnittstelle`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist, direkt vor dem Syntax-Abschnitt.

### Einstellungen

> [!NOTE]
> Diese Information ist spezifisch für Gecko und sollte nur im Bereich der Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies wird auch im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die `addTextTrack()`-Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann zwischen Produkten, die Gecko verwenden, variieren).

## Spezielle Methoden

Einige Methoden sind nicht als reguläre Methoden in WebIDL aufgelistet, sondern als spezielle Schlüsselwörter, die in bestimmte standardmäßige JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifier gibt an, wie ein Objekt basierend auf einer Schnittstelle in Kontexte aufgelöst wird, die einen String erwarten. (Siehe den Abschnitt [Stringifiers](#stringifiers).) Zusätzlich wird das Schlüsselwort `toString()` zugeordnet und definiert als:

```webidl
stringifier;
```

Die `toString()`-Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Range.toString()`](/de/docs/Web/API/Range/toString))

Ein Jsonifier wird `toJSON()` zugeordnet und definiert als:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()`-Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON))

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur der nicht-standardmäßige wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterierbar_ definiert werden, was bedeutet, dass sie die folgenden Methoden haben wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} bei einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei mögliche Arten der Iteration: der _Wert-Iterator_ und der _Paar-Iterator_.

#### Wert-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte vom Typ _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Indizes (die `unsigned long` sind) zurückgibt.
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt.
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt, die die Indizes sind (die `unsigned long` sind). Im Fall von Wert-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, das eine gegebene Rückruffunktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator ermöglicht es, die Syntax `for (const p in object)` als Kurzschrift von `for (const p in object.entries())` zu verwenden. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein.

Die zu überiterierenden Werte können auf eine der folgenden Arten definiert werden:

- Im WebIDL-Dokument, mit der Notation `iterable<valueType>`. Zum Beispiel siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit im WebIDL-Dokument, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angegeben, wenn die Schnittstelle `getter`-Methoden mit einem Parameter des Typs `unsigned long` enthält.
- Außerhalb des WebIDL-Dokuments, im begleitenden Text. Ein solcher Text ist typischerweise in der Spezifikation zu finden und beginnt gewöhnlich mit: _"Die [Werte, über die iteriert wird](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte vom Typ _valueType_ mit Schlüsseln vom Typ _keyType_, das heißt den Wert-Paaren, iterieren. Die generierten Methoden werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Wert-Paare zurückgibt. Zum Beispiel siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, das eine gegebene Rückruffunktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator ermöglicht es, die Syntax `for (const p in object)` als Kurzschrift von `for (const p in object.entries())` zu verwenden. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein. Z.B. [`FormData`](/de/docs/Web/API/FormData).

Die zu überiterierenden Wert-Paare können auf eine der folgenden Arten definiert werden:

- Im WebIDL-Dokument, mit der Notation `iterable<keyType, valueType>`. Zum Beispiel siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb des WebIDL-Dokuments, im begleitenden Text. Ein solcher Text ist typischerweise in der Spezifikation zu finden und beginnt gewöhnlich mit: _"Die [Wert-Paare, über die iteriert wird](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Set-ähnliche Methoden

Eine Schnittstelle kann als _set-ähnlich_ definiert werden, was bedeutet, dass sie _eine geordnete Menge von Werten_ darstellt und folgende Methoden haben wird: `entries()`, `keys()`, `values()`, `forEach()` und `has()` (außerdem hat sie die Eigenschaft `size`). Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} bei einem Objekt, das diese Schnittstelle implementiert. Das set-ähnliche kann vorangestellt werden mit `readonly` oder nicht. Wenn nicht schreibgeschützt, werden auch die Methoden zum Ändern des Sets implementiert: `add()`, `clear()` und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Indizes zurückgibt. Zum Beispiel siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, das eine gegebene Rückruffunktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die set-ähnliche Deklaration nicht mit read-only vorangestellt ist, werden auch folgende Methoden generiert:

- `add()`, das einen Eintrag hinzufügt. Z.B. die `.add()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()`, das die set-ähnliche Struktur leert. Z.B. die `.clear()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()`, das einen Eintrag entfernt. Z.B. die `.delete()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche Set-Schnittstelle ermöglicht es auch, die Syntax `for (const p in object)` als Kurzschrift von `for (const p in object.entries())` zu verwenden.

## Besondere Verhaltensweisen

Einige IDL-Mitglieder zeigen spezielle Verhaltensweisen an, die auf den entsprechenden Seiten vermerkt werden sollten.

### Stringifiers

Neben dem Hinzufügen der `toString()`-Methode zu einer Schnittstelle, wie in [toString() und toJSON()](#tostring_and_tojson) beschrieben, zeigen Stringifiers auch an, dass eine Objektinstanz, wenn sie als String verwendet wird, einen anderen String als den Standard zurückgibt. (Der Standard ist in der Regel eine JSON-Darstellung des Objekts). Wie genau hängt davon ab, wie es in der IDL spezifiziert ist. Unabhängig vom Wie sollte das nicht-standardmäßige Verhalten auf der Schnittstellen-Seite beschrieben werden.

Wenn das Schlüsselwort `stringifier` von einem Attributnamen begleitet wird, hat das Referenzieren des Objektnamens denselben Effekt wie das Referenzieren des Attributnamens. Betrachten Sie das folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse, die auf dieser Schnittstelle basiert, sind die folgenden Codezeilen gleichwertig. Das Verhalten sollte sowohl auf der Eigenschaftsseite als auch auf der Schnittstellenseite vermerkt werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das Schlüsselwort `stringifier` alleine verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten ist im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu erfahren, was eine Schnittstellenreferenz tatsächlich tut, beziehen Sie sich auf die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um deren Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind im WebIDL ein wenig verborgen: Sie sind als Annotationen der Hauptschnittstelle aufgelistet.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer bestimmten Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit derselben Schnittstelle wird mit der `Constructor`-Annotation auf der Schnittstelle definiert. Es können Klammern und eine Liste von Parametern vorhanden sein, oder nicht (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite — zum Beispiel wird das obige Beispiel unter dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` vermerkt.

Ein weiteres Beispiel eines unbenannten Konstruktors, mit Parametern:

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen als den seiner Schnittstelle hat. Zum Beispiel erstellt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL mit der `NamedConstructor`-Annotation auf der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und dem Parameter innerhalb der Klammern, im selben Format, das Sie für Methoden sehen.

Es kann mehrere benannte Konstruktoren für eine bestimmte Schnittstelle geben, aber das ist extrem selten; in einem solchen Fall fügen wir pro Namen eine Unterseite hinzu.

### Neue Konstruktorsyntax

Seit September 2019 wurde die Konstruktorsyntax von WebIDL aktualisiert. Die Konstruktorsyntax beinhaltet keine erweiterte Eigenschaft mehr auf der Schnittstelle:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax namens `constructor` ohne explizit definierten Rückgabewert-Typ, so geschrieben:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dies bedeutet, dass erweiterte Eigenschaften nun auf dem Konstruktor angegeben werden können und es nicht angenommen wird, dass alle Konstruktoren Ausnahmen werfen. Wenn ein Konstruktor eine Ausnahme wirft, wird `[Throws]` verwendet, um dies anzuzeigen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, daher werden Sie wahrscheinlich beide in der freien Wildbahn antreffen. Wir werden daher weiterhin beide Syntaxarten hier behandeln.

### Verfügbarkeit in Workern

Konstruktoren haben dieselbe Verfügbarkeit wie die Schnittstelle oder die partiale Schnittstelle, auf der sie definiert sind. Die Unterseite liefert diese Information genauso wie bei einer Methode.

### Einstellungen

Konstruktoren werden von derselben Präferenz wie die Schnittstelle oder die partiale Schnittstelle, auf der sie definiert sind, gesteuert. Die Unterseite liefert diese Information genauso wie bei einer Methode.
