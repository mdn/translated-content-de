---
title: In einem WebIDL-Dokument enthaltene Informationen
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

Beim Verfassen von Dokumentationen über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden sollte sowie das Modell, und die Implementierungen beschreiben, was tatsächlich in die Browser eingebaut wurde. WebIDL-Dokumente sind eine sehr komprimierte Möglichkeit, viele, aber nicht alle Informationen über die API bereitzustellen. Dieses Dokument bietet einen Leitfaden zum Verständnis der WebIDL-Syntax.

IDL steht für **_Interface Definition Language_** und ist dazu gedacht, APIs zu beschreiben. In der breiteren Welt des Rechnens gibt es verschiedene Arten von IDLs. In der Welt der Browser wird die von uns verwendete IDL als _WebIDL_ bezeichnet. Es gibt zwei Arten von WebIDL: Die in der WebIDL-Spezifikation angegebene und die in Browsern implementierte. Die Spezifikation ist die kanonische Referenz, und die Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist, und enthält zusätzliche Informationen wie Anmerkungen, Informationen über nicht standardmäßige Elemente und browserspezifische Erweiterungen der IDL-Spezifikation.

## Wo Sie WebIDL-Dokumente finden

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr bequeme Möglichkeit, präzise Definitionen zu übermitteln. Diese beschreiben die Syntax der API. Obwohl es die kanonische Referenz ist, müssen wir beachten, dass sie von der tatsächlichen Implementierung abweichen kann. Auf MDN möchten wir praktisch sein und dokumentieren, was die Webplattform wirklich ist, und nicht, was sie idealerweise sein sollte. Überprüfen Sie daher, was da ist, mit den Implementierungen (und zögern Sie nicht, Fehler zu melden, wenn Sie Ungereimtheiten entdecken).
- Drei Browser-Engines verwenden (modifiziertes) WebIDL als Bestandteil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Edge-Versionen vor Chromium verwendeten es intern, aber diese sind leider nicht öffentlich.
  - Für Gecko sind alle WebIDL-Dokumente in einem Verzeichnis zusammengefasst: <https://searchfox.org/firefox-main/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellbaum, aber diese sind nicht WebIDL, sodass Sie sie ignorieren können. Ältere Versionen von Gecko haben einige ihrer WebIDL-Dokumente verstreut, und verwenden möglicherweise sogar Mozilla's IDL anstelle von WebIDL, um einige Web-Schnittstellen zu beschreiben, aber dies wird in jedem aktuellen Gecko-Code kein Problem darstellen.
  - Für Chromium sind sie an zwei Standorten innerhalb der Unterbäume des Source-Codes [renderer/](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/) Verzeichnisses zu finden: [core/](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [modules/](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Im Chromium-Quellcode gibt es auch IDL-Dokumente an anderen Orten, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quellcode verstreut, also müssen Sie etwas mehr graben: z.B. <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Unterschiedliche Dialekte von WebIDL

WebIDL ist in [ihrer Spezifikation](https://webidl.spec.whatwg.org/) definiert. Sie wurde jedoch so gestaltet, dass sie erweitert werden kann, um mehr Informationen zu vermitteln, und Browseranbieter haben dies getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) ihres dialektalen WebIDLs erstellt.
- Für Chromium hat Google ebenfalls ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple ebenfalls eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt verfügbar gemacht.

> [!NOTE]
> Hier beschreiben wir nur den Teil von WebIDL, der beim Schreiben von Dokumentationen am nützlichsten ist. Es gibt viele weitere Anmerkungen, die für Implementierer nützlich sind; um einen vollständigen Überblick zu erhalten, lesen Sie die vier oben verlinkten Dokumente.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die allgemeine API-Funktionen beschreibt.

### Name der Schnittstelle

Der Name der Schnittstelle ist der String, der nach dem Schlüsselwort `interface` und vor der nächsten öffnenden geschweiften Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, ob es sich um eine echte Schnittstelle oder ein Mixin handelt, hat eine eigene Seite in der Dokumentation, die jeden Konstruktor, jede Eigenschaft und jede Methodik auflistet, die dafür definiert sind.

### Vererbungskette

Das Elternteil, falls vorhanden, einer gegebenen Schnittstelle wird nach dem Schnittstellennamen und hinter einem Doppelpunkt (`':'`) definiert. Es kann nur ein Elternteil pro Schnittstelle geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgelistet (unter Verwendung des \\{{APIRef}}-Makros). Es kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden sind für mehrere Schnittstellen verfügbar. Um eine erneute Definition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen, den sogenannten _Mixins_, definiert.

Seit September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwenden Sie `interface mixin`, um eine Mixin-Schnittstelle zu definieren:

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

Mixins haben keine Vererbung und können keine anderen Mixins enthalten. Sie unterstützen jedoch Partials, sodass Sie Dinge wie dieses sehen werden:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke verbirgt MDN Mixins. Sie sind abstrakte und ausschließlich in der Spezifikation vorkommende Konstrukte.
Sie können sie nicht in der Browser-Konsole sehen, und es ist nützlicher zu wissen, auf welchen realen Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie ein Mixin im IDL begegnen, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils),
suchen Sie nach den Schnittstellen, die das Mixin implementieren, z.B.
[HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass anstelle der Dokumentation von `HTMLHyperlinkElementUtils`,
die Dokumentation zu den konkreten Schnittstellen hinzugefügt wird, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)
und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement).

Siehe die folgenden zwei Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenrichtlinie für Mixins in BCD](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines).

### Alte Mixin-Syntax

In der alten WebIDL-Mixin-Syntax, die Sie noch an einigen Stellen antreffen könnten, sind Mixins durch die Verwendung der Annotation `[NoInterfaceObject]` gekennzeichnet:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die in einer Schnittstelle implementiert sind, durch das Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in Fenster und Workern

Die Verfügbarkeit in Web-Workern (jedes Typs) und im Window-Scope wird durch eine Annotation definiert: `[Exposed=(Window,Worker)]`. Die Annotation gilt für das Partial Interface, mit dem sie aufgeführt ist.

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

In diesem Fall ist `Performance.now()` im `Window`-Scope und in jedem Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` nicht für Web-Worker verfügbar sind.

Die häufigsten Werte für `[Exposed]` sind:

- `Window`
  - : Das Partial Interface ist im globalen Scope von [`Window`](/de/docs/Web/API/Window) verfügbar.
- `Worker`
  - : Das Partial Interface ist in jedem Art von Worker verfügbar, das heißt, wenn der globale Scope ein Nachfahre von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (es ist auch für `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie nicht im Web sichtbar sind und intern für Firefox sind.)
- `DedicatedWorker`
  - : Das Partial Interface ist nur im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Das Partial Interface ist nur im [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Das Partial Interface ist nur im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein anderer Wert ist möglich, wie `System`, aber dies hat eine [besondere Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes), die nicht dokumentiert werden muss.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dokumenten definiert sind. Schnittstellen können eine `[Global=xyz]` Annotation haben. Das bedeutet, dass, wenn ein Objekt dieses Typs als globaler Scope verwendet wird, jede Schnittstelle, Eigenschaft oder Methode, die `xyz` als Wert in `[Exposed]` hat, verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier wird definiert, dass, wenn der globale Scope vom Typ `DedicatedWorkerGlobalScope` ist, das heißt, wenn wir in einem dedizierten Worker sind, jede Schnittstelle, Eigenschaft oder Methode, die – über die `[Exposed]` Annotation – an `Worker` oder `DedicatedWorker` verfügbar ist, verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur in der Browser-Kompatibilitätssektion verwendet werden.

In Gecko kann die Verfügbarkeit einer Partial Interface, einschließlich seines Konstruktors, seiner Eigenschaften und Methoden, durch eine Präferenz gesteuert werden (normalerweise als "pref" bezeichnet). Dies wird auch im WebIDL markiert.

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
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

### Nur im Systemcode verfügbar

Einige Schnittstellenfunktionen sind möglicherweise nur im internen Systemcode des Browsers oder im Chrome-Code verfügbar. Um dies anzuzeigen, verwenden wir in Gecko \[ChromeOnly], zum Beispiel die Eigenschaft propName im folgenden Beispiel ist nur über Chrome-Code aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Sie erkennen die Definition einer Eigenschaft an der Verwendung des `attribute`-Schlüsselworts.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in der Dokumentation beziehen wir uns darauf als `HTMLMediaElement.error`, da es zur `HTMLMediaElement`-Schnittstelle gehört. Das Verlinken zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix mit \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.error', 'error')}} wenn der Kontext offensichtlich und eindeutig ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) gibt an, dass es den Wert `null` haben kann, und die Dokumentation muss _wann_ dies auftreten kann, erklären. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ vorangestellt sein, ein in eckigen Klammern eingeschlossener String (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute weisen auf spezielle Verhaltensweisen hin, die in der Prosa beschrieben werden müssen. Hier ist eine Liste standardmäßiger erweiterter Attributtypen und der Ergänzungen, die gemacht werden müssen:

- `[LegacyNullToEmptyString]`
  - : Der `null`-Wert wird auf eine nicht standardmäßige Weise in einen String konvertiert. Der Standardweg besteht darin, ihn in den String `"null"` zu konvertieren, aber in diesem Fall wird er in `""` konvertiert.

    Fügen Sie am Ende des _Wert_-Abschnitts des Artikels den folgenden Satz hinzu:

    _Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, also ist `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""`._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibrechte an der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht verändert werden. Dies muss markiert werden als:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}}-Makro neben dessen Definitionsterm hinzugefügt wird.
- Im ersten Satz seiner eigenen Seite, indem die Beschreibung mit: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_ beginnt.
- Indem die Beschreibung auf der Schnittstellenseite mit _Gibt zurück…_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als 'zurückgebend' beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert zu setzen.

Einige Eigenschaften haben die `[PutForwards=xyz]` Annotation. Dies bedeutet, dass die Eigenschaft ein Verweis auf ein anderes Objekt ist, und wenn ein neuer Wert zugewiesen wird, wird die Zuweisung an die `xyz`-Eigenschaft des referenzierten Objekts weitergeleitet.

Fügen Sie am Ende des _Wert_-Abschnitts des Artikels einen ähnlichen Absatz hinzu:

_Obwohl die `style`-Eigenschaft an sich schreibgeschützt ist, insofern als Sie das `CSSStyleDeclaration`-Objekt nicht ersetzen können, können Sie trotzdem direkt der `style`-Eigenschaft einen Wert zuweisen, was dem Zuweisen an die [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft entspricht. Sie können das `CSSStyleDeclaration`-Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern._

### Auslösende Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, zum Beispiel wenn einige Werte illegal sind, kann das Setzen eines neuen Werts dazu führen, dass eine Ausnahme ausgelöst wird. Dies wird mit der `[SetterThrows]`-Annotation markiert. Wenn dies geschieht, _muss_ der Syntaxabschnitt der Eigenschaftsseite einen Abschnitt für Ausnahmen enthalten. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als textliche Informationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen illegalen Enumerationswert](https://webidl.spec.whatwg.org/#es-enumeration) (gemappt auf einen JavaScript {{jsxref('String')}}) zu setzen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist jedoch nur implizit im WebIDL-Dokument markiert.

Es ist unüblich, dass Getter Ausnahmen auslösen, obwohl dies in einigen Fällen vorkommt. In diesem Fall wird die `[GetterThrows]`-Annotation verwendet. Auch hier _muss_ der Syntaxabschnitt der Eigenschaftsseite einen Abschnitt für Ausnahmen haben.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Keine Ausnahmen auslösen

Wenn die Bedeutung von WebIDL nicht befolgt wird, wird oft eine Ausnahme ausgelöst, selbst ohne `[SetterThrows]` oder `[GetterThrows]` gesetzt. Zum Beispiel, wenn wir im strikten Modus versuchen, einer schreibgeschützten Eigenschaft einen neuen Wert zuzuweisen, das heißt ihren impliziten Setter aufzurufen, wird eine schreibgeschützte Eigenschaft im strikten Modus eine Ausnahme auslösen.

Meist aus Kompatibilitätsgründen ist dieses Verhalten manchmal ärgerlich. Um dies durch Erstellen eines No-Op-Setters zu verhindern (das heißt, indem jeder Versuch, die Eigenschaft auf einen neuen Wert zu setzen, stillschweigend ignoriert wird), kann die `[LenientSetter]`-Annotation verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird dem Beschreibungstext der Eigenschaft ein zusätzlicher Satz hinzugefügt, z.B.:

_Obwohl diese Eigenschaft schreibgeschützt ist, wird keine Ausnahme ausgelöst, wenn sie geändert wird (auch im strikten Modus); der Setter ist eine No-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz auf ein internes Objekt sein.

Basise Objekte mit Typen wie {{jsxref("String")}} (ein IDL `DOMString`, oder andere), {{jsxref("Number")}} (ein IDL `byte`, `octet`, `unsigned int`, oder andere), und {{jsxref("Boolean")}} werden immer kopiert und es muss darüber nichts Besonderes gesagt werden (dies ist das natürliche Verhalten, das von einem JavaScript-Entwickler erwartet wird).

Für Schnittstellenobjekte ist der Standard, eine _Referenz_ auf das interne Objekt zurückzugeben. Dies muss sowohl in der kurzen Beschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den spezifischen Unterseiten angegeben werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, bezieht sich auf die Referenz (das interne Objekt kann nicht geändert werden.) Die Eigenschaften des zurückgegebenen Objekts können geändert werden, auch wenn sie in der entsprechenden Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dieser Fall wird im WebIDL durch die `[NewObject]`-Annotation angezeigt.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: Die Änderung beeinflusst nicht den internen Wert, und eine Änderung des internen Werts wird sich nicht auf jedes Objektinstanz auswirken. In der Dokumentation werden wir dies markieren, indem wir das Adjektiv _neu_ neben dem Objekt verwenden:

_Die schreibgeschützte Eigenschaft **`HTMLMediaElement.buffered`** gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Fall einer Referenz auf ein Sammlung-Objekt (wie `HTMLCollection`, `HTMLFormElementsCollection`, oder `HTMLOptionsCollection`, immer ohne `[NewObject]`), machen wir es explizit, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sein werden. Um dies zu kennzeichnen, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollections`, oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch in der Unterseite.

Zum Beispiel:

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine live \\{{domxref("HTMLFormControlsCollection")}} zurück, die…

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Eigenschaften in Workern wird ebenfalls im WebIDL angegeben. Für eine Eigenschaft ist der Standard die gleiche Verfügbarkeit wie die `Schnittstelle` (das heißt, nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar, wenn nichts Besonderes markiert ist) oder wie das `partial interface`, in dem sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist oder nicht, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur in der Browser-Kompatibilitätssektion verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies wird auch im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert `media.webvtt.enabled` die Eigenschaft `textTracks`.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein).

## Methoden

Sie erkennen die Definition einer Methode an den Klammern nach dem Namen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir werden uns darauf als `HTMLMediaElement.canPlayType()` (mit den Klammern, die darauf hinweisen, dass es sich um eine Methode handelt) in der Dokumentation beziehen, da sie zur `HTMLMediaElement`-Schnittstelle gehört. Das Verlinken zur Seite erfolgt entweder **mit** dem Schnittstellenpräfix mit \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} wenn der Kontext offensichtlich und eindeutig ist. Die Klammern sollten immer enthalten sein.

### Parameter

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode sind im Abschnitt Syntax der Unterseite der Methode aufgelistet. Sie sind im WebIDL der Reihenfolge nach aufgeführt, zwischen den Klammern, als durch Komma getrennte Liste. Jeder Parameter hat einen Namen (oben angegeben) und einen Typ (z.B. ein `'?'` bedeutet, dass der `null`-Wert gültig ist). Wenn als `optional` markiert, ist der Parameter optional, in einem Methodenaufruf enthalten zu sein und muss das \\{{optional_inline}}-Flag enthalten, wenn er im Syntaxabschnitt aufgeführt ist. Der Standardwert des Parameters ist nach dem Gleichheitszeichen (`'='`) aufgelistet.

Parametertypen können spezielles Verhalten haben, das mit erweiterten Attributen beschrieben wird (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und die Ergänzung, die Sie in der Prosa vornehmen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie am Ende der Parameterbeschreibung folgenden Satz hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird als leerer String (`""`) behandelt._

### Typ des Rückgabewertes

```webidl
DOMString canPlayType(DOMString type);
```

Der Typ des Rückgabewertes wird vor dem Methodennamen angegeben — im obigen Fall ist der Wert ein Objekt des Typs `DOMString`. Wenn der Rückgabetyp von einem Fragezeichen (`'?'`) gefolgt wird, kann auch ein Wert von `null` zurückgegeben werden, und die Dokumentation muss _wann_ dies geschehen kann, erklären. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das Schlüsselwort `void` ist, bedeutet das, dass es keinen Rückgabewert gibt. Es ist kein Rückgabewerttyp. Wenn der WebIDL-Eintrag `void` liest, sollte der Abschnitt _Rückgabewert_ in den Dokumenten einfach "None (\{{jsxref("undefined")}})." angeben.

### Auslösende Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird durch die `[Throws]`-Annotation markiert. Wenn dies geschieht, _muss_ der Syntaxabschnitt der Methodenseite einen Abschnitt für Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als textliche Informationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, sondern durch die JavaScript-Bindungen definiert werden. [Der Versuch, einen illegalen Enumerationswert](https://webidl.spec.whatwg.org/#es-enumeration) (gemappt auf einen JavaScript {{jsxref('String')}}) als Parameter zu setzen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist jedoch nur implizit im WebIDL-Dokument markiert.

Sehen Sie sich einen dieser [_Exceptions_ sections](/de/docs/Web/API/SubtleCrypto/importKey#exceptions).

### Verfügbarkeit in Workern

Die Verfügbarkeit einzelner Methoden in Workern wird ebenfalls im WebIDL angegeben. Für eine Methode ist der Standard die gleiche Verfügbarkeit wie die `Schnittstelle` (das heißt, nur im [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar, wenn nichts Besonderes markiert ist) oder wie das `partial interface`, in dem sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist oder nicht, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur in der Browser-Kompatibilitätssektion verwendet werden.

In Gezcko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies wird auch im WebIDL markiert.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert `media.webvtt.enabled` die Methode `addTextTrack()`.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zum anderen unterschiedlich sein.)

## Besondere Methoden

Einige Methoden werden nicht als reguläre Methoden im WebIDL aufgelistet, sondern als spezielle Schlüsselwörter, die in bestimmte Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifier gibt an, wie ein auf einer Schnittstelle basierendes Objekt in Kontexten aufgelöst wird, die einen String erwarten. (Siehe den Abschnitt [Stringifizierer](#stringifier).) Zusätzlich wird das Schlüsselwort auf `toString()` abgebildet und definiert als:

```webidl
stringifier;
```

Die `toString()`-Methode wird genauso aufgelistet wie jede andere Methode der Schnittstelle und hat ihre eigene Unterseite (z.B. [`Range.toString()`](/de/docs/Web/API/Range/toString))

Ein Jsonifier wird auf `toJSON()` abgebildet und definiert als:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()`-Methode wird genauso wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON))

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet – nur der nicht standardmäßige, wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iterator-ähnliche Methoden

Eine Schnittstelle kann als _iterierbar_ definiert werden, was bedeutet, dass sie die folgenden Methoden haben wird: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützt auch den Einsatz von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei Arten von Iterationen: den _Werte-Iterator_ und den _Paar-Iterator_.

#### Werte-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte vom Typ _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Indizes (die `unsigned long` sind) zurückgibt.
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Werten zurückgibt.
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf den Schlüsseln, die seine Indizes sind (die `unsigned long` sind), zurückgibt. Im Fall von Werte-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, die eine gegebene Rückruffunktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator erlaubt es, die Syntax `for (const p in object)` als Kurzform für `for (const p in object.entries())` zu verwenden. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein.

Die Werte, die durchlaufen werden sollen, können auf eine der folgenden Arten definiert werden:

- Im WebIDL-Dokument, unter Verwendung der Notation `iterable<valueType>`. Zum Beispiel siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit im WebIDL-Dokument, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angezeigt, wenn die Schnittstelle `getter`-Methoden mit einem Parameter vom Typ `unsigned long` enthält.
- Außerhalb des WebIDL-Dokuments, in der Begleitprosa. Eine solche Prosa ist typischerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"Die [Werte, die durchlaufen werden sollen](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte vom Typ _valueType_ mit Schlüsseln vom Typ _keyType_ iterieren, das heißt, die Wertepaare. Die generierten Methoden werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Wertepaare zurückgibt. Zum Beispiel siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, die eine gegebene Rückrufunktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator erlaubt es, die Syntax `for (const p in object)` als Kurzform für `for (const p in object.entries())` zu verwenden. Wir fügen einen Satz darüber in die Schnittstellenbeschreibung ein. Zum Beispiel [`FormData`](/de/docs/Web/API/FormData).

Die Wertepaare, die durchlaufen werden sollen, können auf eine der folgenden Arten definiert werden:

- Im WebIDL-Dokument, unter Verwendung der Notation `iterable<keyType, valueType>`. Zum Beispiel siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb des WebIDL-Dokuments, in der Begleitprosa. Eine solche Prosa ist typischerweise in der Spezifikation zu finden und beginnt normalerweise mit: _"Die [Wertepaare, die durchlaufen werden sollen](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Set-ähnliche Methoden

Eine Schnittstelle kann als _Set-ähnlich_ definiert werden, was bedeutet, dass sie eine _geordnete Menge von Werten_ darstellt und die folgenden Methoden haben wird: `entries()`, `keys()`, `values()`, `forEach()`, `has()` (sie hat auch die `size`-Eigenschaft). Sie unterstützt auch den Einsatz von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Die Set-ähnliche kann mit `readonly` oder auch nicht versehen sein. Wenn nicht schreibgeschützt, werden die Methoden zum Ändern des Sets ebenfalls implementiert: `add()`, `clear()`, und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Indizes zurückgibt. Zum Beispiel siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Werte zurückgibt. Zum Beispiel siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, das einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf die Schlüssel zurückgibt. Zum Beispiel siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, das eine gegebene Rückruffunktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die Set-ähnliche Deklaration nicht durch read-only vorangestellt ist, werden auch die folgenden Methoden generiert:

- `add()`, die einen Eintrag hinzufügt. Z.B. die `.add()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()`, die die Set-ähnliche Struktur leert. Z.B. die `.clear()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()`, die einen Eintrag entfernt. Z.B. die `.delete()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche Set-Schnittstelle erlaubt es auch, die Syntax `for (const p in object)` als Kurzform für `for (const p in object.entries())` zu verwenden.

## Besondere Verhaltensweisen

Einige IDL-Mitglieder weisen auf spezielle Verhaltensweisen hin, die auf den entsprechenden Seiten erwähnt werden sollten.

### Stringifier

Zusätzlich zur Hinzufügung der `toString()`-Methode zu einer Schnittstelle, wie beschrieben in [toString() und toJSON()](#tostring_and_tojson), geben Stringifier auch an, dass eine Objektinstanz, wenn sie als String verwendet wird, einen anderen String als den Standard zurückgibt. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts). Exakt wie dies geschieht, hängt davon ab, wie es im IDL spezifiziert wird. Unabhängig vom Wie sollte das nicht-Standardverhalten auf der Schnittstellenseite beschrieben werden.

Wenn das Schlüsselwort `stringifier` zusammen mit einem Attributnamen verwendet wird, hat das Referenzieren des Objektnamens die gleiche Auswirkung wie das Referenzieren des Attributnamens. Betrachten Sie das folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse basierend auf dieser Schnittstelle sind die folgenden Zeilen im Code äquivalent. Das Verhalten sollte auf der Eigenschaften-Seite und zusätzlich auf der Schnittstellenseite bemerkt werden.

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

Um herauszufinden, was eine Schnittstellenreferenz tatsächlich tut, lesen Sie die Schnittstellenspezifikation oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind im WebIDL ein wenig versteckt: Sie werden als Annotationen der Hauptschnittstelle aufgeführt.

### Unbenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer gegebenen Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit der gleichen Schnittstelle wird durch die `Constructor` Annotation auf der Schnittstelle definiert. Es kann Klammern und eine Parameterliste geben oder nicht (wie im obigen Beispiel). Wir dokumentieren alle unbenannten Konstruktoren auf einer Unterseite – zum Beispiel wird das oben unter dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` gegeben.

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

Ein benannter Konstruktor ist ein Konstruktor, der einen anderen Namen als seine Schnittstelle hat. Zum Beispiel erstellt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL mittels der `NamedConstructor`-Annotation auf der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und den Parametern innerhalb der Klammern, im gleichen Format, das Sie für Methoden sehen.

Es kann mehrere benannte Konstruktoren für eine bestimmte Schnittstelle geben, das ist jedoch extrem selten; in solch einem Fall beinhalten wir eine Unterseite pro Name.

### Neue Konstruktorsyntax

Seit September 2019 wurde die WebIDL Konstruktorsyntax aktualisiert. Die Konstruktorsyntax beinhaltet keine erweiterte Attribut auf der Schnittstelle mehr:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax mit dem Namen `constructor` ohne explizit definierten Rückgabewert, wie folgt geschrieben:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dies bedeutet, dass erweiterte Attribute nun auf den Konstruktor spezifiziert werden können, und es wird nicht mehr angenommen, dass alle Konstruktoren Ausnahmen auslösen. Wenn ein Konstruktor Ausnahmen auslöst, wird `[Throws]` verwendet, um dies anzuzeigen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, sodass Sie wahrscheinlich beide Typen in freier Wildbahn antreffen werden. Wir werden daher weiterhin beide Arten von Syntax hier behandeln.

### Verfügbarkeit in Workern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle oder die Teil-Schnittstelle, auf der sie definiert sind. Die Unterseite liefert diese Information auf die gleiche Weise wie für eine Methode.

### Präferenzen

Konstruktoren werden durch die gleiche Präferenz gesteuert wie die Schnittstelle oder das Teil-Schnittstelle, auf der sie definiert sind. Die Unterseite liefert diese Information auf die gleiche Weise wie für eine Methode.
