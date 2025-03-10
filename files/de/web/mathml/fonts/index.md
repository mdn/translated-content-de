---
title: Schriftarten für MathML
slug: Web/MathML/Fonts
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{MathMLRef}}

Schriftarten mit angemessener Unicode-Abdeckung und Open Font Format-Funktionen sind erforderlich für eine gute Darstellung von Mathematik. Diese Seite beschreibt, wie Benutzer solche mathematischen Schriftarten installieren können, um MathML in Browsern korrekt anzuzeigen.

## Installationsanweisungen

Als allgemeine Faustregel wird empfohlen, sowohl _Latin Modern Math_ (das den für mathematische Formeln beliebten [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern)-Stil verwendet) als auch _STIX Two Math_ (das eine große Unicode-Abdeckung für wissenschaftliche Zeichen hat) zu installieren. In den folgenden Abschnitten finden Sie detaillierte Anweisungen zur Installation dieser Schriftarten auf verschiedenen Betriebssystemen.

### Windows

Installieren Sie die Schriftarten _Latin Modern Math_ und _STIX Two Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Öffnen Sie das ZIP-Archiv, navigieren Sie in das Verzeichnis `latinmodern-math-1959` und dann in das `otf`-Verzeichnis. Sie finden dort eine `latinmodern-math`-Schriftdatei.
3. Öffnen Sie die `latinmodern-math`-Schriftdatei und klicken Sie auf die Schaltfläche **Installieren**.
4. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
5. Öffnen Sie das ZIP-Archiv `static_otf.zip` und navigieren Sie in das Verzeichnis `static_otf`. Unter den Dateien dort finden Sie eine `STIXTwoMath-Regular`-Datei.
6. Öffnen Sie die `STIXTwoMath-Regular`-Datei und klicken Sie auf die Schaltfläche **Installieren**. Wenn gewünscht, können Sie dies auch für die anderen Schriftdateien im Verzeichnis tun.

> **Hinweis:** _Cambria Math_ ist standardmäßig unter Windows installiert und sollte eine relativ gute MathML-Darstellung gewährleisten.

### macOS

Installieren Sie die Schriftart _Latin Modern Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Entpacken Sie das ZIP-Archiv, navigieren Sie in das Verzeichnis `latinmodern-math-1959` und dann in das `otf`-Verzeichnis. Sie finden dort eine `latinmodern-math`-Schriftdatei.
3. Doppelklicken Sie auf die `latinmodern-math`-Schriftdatei und klicken Sie auf die Schaltfläche **Schriftart installieren** im sich öffnenden Fenster.

> [!NOTE]
> Wenn Sie macOS Ventura (Version 13) oder höher verwenden, ist _STIX Two Math_ bereits vorinstalliert und Sie können die untenstehenden Schritte überspringen.

Installieren Sie die Schriftart _STIX Two Math_ wie folgt:

1. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Öffnen Sie das ZIP-Archiv `static_otf.zip` und navigieren Sie in das Verzeichnis `static_otf`. Unter den dortigen Dateien finden Sie eine `STIXTwoMath-Regular.otf`-Datei.
3. Öffnen Sie die `STIXTwoMath-Regular.otf`-Datei und klicken Sie auf die Schaltfläche **Schriftart installieren** im sich öffnenden Fenster. Wenn gewünscht, können Sie dies auch für die anderen Schriftdateien im Verzeichnis tun.

> [!NOTE]
> Eine veraltete Version von _STIX_ ist seit OS X Lion (Version 10.7) vorinstalliert. Obwohl einige Browser sie verwenden können, wird dringend empfohlen, die obigen Anweisungen für eine optimale mathematische Darstellung zu befolgen.

### Linux

Nachfolgend finden Sie Befehle, die auf beliebten Linux-Distributionen ausgeführt werden können,
um die Schriftarten _Latin Modern Math_ und _STIX Two Math_ von Ihrem
Paketmanager zu installieren. Alternative Ansätze werden ebenfalls bereitgestellt, wenn Ihre Linux-Distribution keine speziellen Pakete für diese Schriftarten anbietet.

#### Debian-basierte Distributionen (einschließlich Ubuntu und Mint)

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

#### Fedora-basierte Distributionen

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### openSUSE-basierte Distributionen

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive-Pakete

Wenn Ihre Linux-Distribution keine Pakete für die _Latin Modern Math_ und _STIX_-Schriftarten bereitstellt, sollten Sie stattdessen die `texlive` Pakete installieren, die die Schriftarten _Latin Modern Math_ und _XITS_ enthalten. Zum Beispiel auf Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

Sie müssen jedoch wahrscheinlich sicherstellen, dass diese Schriftarten Ihrem System bekannt sind. Fügen Sie eine fontconfig-Konfiguration `/etc/fonts/conf.avail/09-texlive-fonts.conf` hinzu, die auf das `opentype`-Verzeichnis von TeXLive verweist, beispielsweise:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Schließlich fügen Sie diese Konfigurationsdatei zur Liste der System-Schriftortverzeichnisse hinzu und regenerieren Sie den fontconfig-Cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream-Pakete

Wenn auf Ihren Linux-Distributionen keine Pakete verfügbar sind oder wenn Sie einfach Upstream-Pakete installieren möchten, dann versuchen Sie dies:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Erstellen Sie ein `~/.fonts`-Verzeichnis, falls es noch nicht existiert, und platzieren Sie `latinmodern-math.otf` und `STIXTwoMath-Regular.otf` in diesem Verzeichnis.
3. Führen Sie `fc-cache -f` aus, um den fontconfig-Cache zu regenerieren.

### Android

Sie müssen das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) verwenden.

> [!NOTE]
> Noto Sans Math bietet eine gute Unicode-Abdeckung für mathematische Symbole und [Google plant, Unterstützung für mathematische Layout-Funktionen hinzuzufügen](https://github.com/notofonts/math/issues/14#issuecomment-1161414446).

### Andere Systeme

Auf anderen Systemen ziehen Sie in Betracht, eine [Schriftart mit einem MATH-Tabelle](#schriftarten_mit_einem_math-tabelle) mit Ihrem Paketmanager zu installieren. Beachten Sie, dass diese Schriftarten in der Regel mit TeX-Distributionen wie [TeX Live](https://www.tug.org/texlive/) geliefert werden, aber dass Sie möglicherweise spezielle Anweisungen befolgen müssen, damit Ihr System die Schriftarten erkennt. Als letztes Mittel installieren Sie das [MathML fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Erweiterte Einrichtung

In den folgenden Abschnitten finden Sie weitere nützliche Tipps zur Installation und
Konfiguration von Schriftarten für MathML.

### Arabische mathematische Alphabetzeichen

Derzeit haben nur sehr wenige Schriftarten geeignete Glyphen für arabische mathematische Alphabetzeichen. Wenn Sie wahrscheinlich diese Zeichen benötigen, empfehlen wir die Installation der Schriftarten _XITS_ oder [Amiri](https://aliftype.com/amiri/).

### Installation ohne Administratorrechte

Wenn Sie Schriftarten auf einem System ohne Administratorrechte installieren müssen, ist die einfachste Option, das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) zu verwenden. Beachten Sie, dass die Verwendung des Add-ons nicht optimal ist, da es Ihren Gecko-Browser zwingt, ein CSS-Stylesheet auf jeder besuchten Seite sowie Web-Mathe-Schriftarten auf allen Seiten mit MathML-Inhalten zu laden.

Eine bessere Alternative auf UNIX-Systemen ist es, die OTF-Dateien für [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [STIX](https://github.com/stipub/stixfonts) in einem lokalen Schriftverzeichnis zu installieren und (falls notwendig) `fc-cache` darauf auszuführen. Auf macOS und Linux sind die Standardpfade hierfür `~/Library/Fonts/` und `~/.fonts`.

### Schriftarten mit einem MATH-Tabelle

Sie können tatsächlich jede [mathematische OpenType-Schriftart](https://fred-wang.github.io/MathFonts/) installieren und für die MathML-Darstellung verwenden. Einige Browser bieten eine Möglichkeit, die Standardschriftart für MathML in ihrem Schriftarten-Einstellungsmenu zu konfigurieren. Alternativ können Sie das [MathML Font Settings Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/) ausprobieren.

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://learn.microsoft.com/en-us/typography/font-list/?FID=360)
- [DejaVu Math TeX Gyre](https://sourceforge.net/projects/dejavu/files/dejavu/)
- [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math)
- [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math)
- [Libertinus Math](https://github.com/alerque/libertinus)
- [STIX Math](https://github.com/stipub/stixfonts)
- [TeX Gyre Bonum Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Bonum_Math)
- [TeX Gyre Pagella Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Pagella_Math)
- [TeX Gyre Schola Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Schola_Math)
- [TeX Gyre Termes Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Termes_Math)
- [XITS Math](https://github.com/aliftype/xits/releases)
- [Fira Math](https://github.com/firamath/firamath)
- [GFS Neohellenic Math](https://greekfontsociety-gfs.gr/typefaces/Math)
